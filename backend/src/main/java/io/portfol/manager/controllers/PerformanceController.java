package io.portfol.manager.controllers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.dal.external.AlphaVantageStockData;
import io.portfol.manager.dal.external.ShareDataHandler;
import io.portfol.manager.dal.external.YahooStockData;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.ShareHistory;
import io.portfol.manager.model.ShareHolding;
import io.portfol.manager.model.dto.PerformanceRequest;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PerformanceController {

	private JwtTokenService jwtTokenService;
	private UserRepository userRepository;
	private ShareDataHandler dataHandler;

	@Autowired
	public PerformanceController(UserRepository userRepo, JwtTokenService jwtTokenService) {
		super();
		this.userRepository = userRepo;
		this.jwtTokenService = jwtTokenService;
		dataHandler = new ShareDataHandler(new YahooStockData(), new AlphaVantageStockData());
	}

	@PostMapping(value = "/performance", produces = MediaType.APPLICATION_JSON_VALUE)
	@Secured({ "ROLE_ADMIN", "ROLE_USER" })
	public List<LinkedHashMap<String, String>> getPerformanceData(@RequestHeader("Authorization") String token,
			@RequestBody PerformanceRequest request) {
		List<LinkedHashMap<String, String>> response = new ArrayList<>();
		
		List<String> requestedSymbols = new ArrayList<>();
		for(String symbol: request.getSymbols().split(",")) {
			requestedSymbols.add(symbol);
		}
		
		String[] symbols;
		boolean includePortfolio = requestedSymbols.contains("PORTFOLIO");
		
		Portfolio portfolio = null;
		List<ShareHolding> holdings = null;
		List<String> symbolsList = new ArrayList<>();
		List<String> extraSymbols = new ArrayList<>();
		
		if(includePortfolio) {
			portfolio  = getUserPortfolio(token);
			holdings = portfolio.getShareHoldings();
			symbols = new String[holdings.size() + requestedSymbols.size() - 1];
			
			// Add portfolio holdings to list of shares to retrieve
			for(ShareHolding holding: holdings) {
				symbolsList.add(holding.getShare().getSymbol());
				if(requestedSymbols.contains(holding.getShare().getSymbol()))
					extraSymbols.add(holding.getShare().getSymbol());
			}
			
			// Add any extra shares to list of shares to retrieve
			for(String symbol: requestedSymbols) {
				if(!symbol.equals("PORTFOLIO") && !symbolsList.contains(symbol)) {
					extraSymbols.add(symbol);
					symbolsList.add(symbol);
				}
			}
			symbolsList.toArray(symbols);
		} else {
			symbols = new String[requestedSymbols.size()];
			requestedSymbols.toArray(symbols);
			for(String symbol: requestedSymbols) {
				extraSymbols.add(symbol);
				symbolsList.add(symbol);
			}
		}

		
		String[] start = request.getFrom().split("-");
		String[] end = request.getTo().split("-");
		LocalDateTime dateFrom = LocalDateTime.of(Integer.parseInt(start[2]), Integer.parseInt(start[1]), Integer.parseInt(start[0]), 0, 0);
		LocalDateTime dateTo = LocalDateTime.of(Integer.parseInt(end[2]), Integer.parseInt(end[1]), Integer.parseInt(end[0]), 0, 0);
		
		// Symbol mapped to a list of it's historical data
		Map<String, List<ShareHistory>> historicalData = dataHandler.getHistoricalSharePrices(symbols, dateFrom, dateTo, request.getInterval());
		
		List<Date> dates = new ArrayList<>();		
		// Portfolio shares
		List<List<ShareHistory>> shareHistoriesGroupedBydate = new ArrayList<>();
		
		// Group all share histories by date
		boolean first = true;
		for(Map.Entry<String, List<ShareHistory>> entry: historicalData.entrySet()) {
			int i = 0;
			for(ShareHistory shareHistory: entry.getValue()) {
				List<ShareHistory> datesHistory;
				if(first) {
					datesHistory = new ArrayList<>();
					datesHistory.add(shareHistory);
					shareHistoriesGroupedBydate.add(datesHistory);
					dates.add(shareHistory.getDate().getTime());
				} else {
					datesHistory = shareHistoriesGroupedBydate.get(i);
					datesHistory.add(shareHistory);
				}
				
				i++;
			}
			first = false;	
		}
		
		for(int i = 0; i < dates.size(); i++) {
			LinkedHashMap<String, String> daysData;
			Double[] dailyAverage;
			if(includePortfolio) {
				daysData = new LinkedHashMap<>();
				daysData.put("Share", "PORTFOLIO");
				List<ShareHistory> portfolioDayHistory = extractPortfolioHistory(portfolio, shareHistoriesGroupedBydate.get(i));
				dailyAverage = calculateMarketday(portfolioDayHistory);
				daysData.put("Date", dates.get(i).toString());
				daysData.put("Open", dailyAverage[0].toString());
				daysData.put("High", dailyAverage[1].toString());
				daysData.put("Low", dailyAverage[2].toString());
				daysData.put("Close", dailyAverage[3].toString());				
				response.add(daysData);
			}
			for(String symbol: extraSymbols) {
				daysData = new LinkedHashMap<>();
				daysData.put("Share", symbol);
				List<ShareHistory> shareHistory = extractShareHistory(symbol, shareHistoriesGroupedBydate.get(i));
				dailyAverage = calculateMarketday(shareHistory);
				daysData.put("Date", dates.get(i).toString());
				daysData.put("Open", dailyAverage[0].toString());
				daysData.put("High", dailyAverage[1].toString());
				daysData.put("Low", dailyAverage[2].toString());
				daysData.put("Close", dailyAverage[3].toString());
				response.add(daysData);
			}
		}
		
		return response;
	}
	
	private List<ShareHistory> extractShareHistory(String symbol, List<ShareHistory> requestedShareHistory) {
		List<ShareHistory> shareHistory = new ArrayList<>();
		
		for(ShareHistory history: requestedShareHistory) {
			if(history.getSymbol().equals(symbol))
				shareHistory.add(history);
		}
		
		return shareHistory;
	}
	
	private List<ShareHistory> extractPortfolioHistory(Portfolio portfolio, List<ShareHistory> requestedShareHistory) {
		List<ShareHistory> portfolioHistory = new ArrayList<>();
		
		List<ShareHolding> portfolioContents = portfolio.getShareHoldings();
		
		for(ShareHistory history: requestedShareHistory) {
			for(ShareHolding holding: portfolioContents) {
				if(history.getSymbol().equals(holding.getShare().getSymbol())) {
					portfolioHistory.add(history);
					break;
				}
			}
		}
		
		return portfolioHistory;
	}

	private Double calculatePortfolioValue(List<Double> shareValues) {
		Double total = new Double(0.0);

		for (Double amount : shareValues) {
			total += amount;
		}

		return total;
	}
	
	private Double[] calculateMarketday(List<ShareHistory> sharesHistory) {
		Double[] dailyAverage = new Double[4];
		
		List<Double> daysOpens = new ArrayList<>();
		List<Double> daysHighs = new ArrayList<>();
		List<Double> daysLows = new ArrayList<>();
		List<Double> daysCloses = new ArrayList<>();
		
		for(ShareHistory share: sharesHistory) {
			daysOpens.add(share.getOpenPrice());
			daysHighs.add(share.getHighPrice());
			daysLows.add(share.getLowPrice());
			daysCloses.add(share.getClosePrice());
		}
		
		dailyAverage[0] = calculatePortfolioValue(daysOpens);
		dailyAverage[1] = calculatePortfolioValue(daysHighs);
		dailyAverage[2] = calculatePortfolioValue(daysLows);
		dailyAverage[3] = calculatePortfolioValue(daysCloses);
		
		return dailyAverage;
	}

	private Portfolio getUserPortfolio(String token) {
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepository.findByUsername(username).orElse(null);

		return user.getPortfolio();
	}

}
