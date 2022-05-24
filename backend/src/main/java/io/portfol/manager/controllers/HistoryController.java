package io.portfol.manager.controllers;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
import io.portfol.manager.model.dto.ShareHistoryRequest;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryController {

	private JwtTokenService jwtTokenService;
	private UserRepository userRepository;
	private ShareDataHandler dataHandler;
	
	@Autowired
	HistoryController(JwtTokenService jwtTokenService, UserRepository userRepository) {
		this.jwtTokenService = jwtTokenService;
		this.userRepository = userRepository;
		dataHandler = new ShareDataHandler(new YahooStockData(), new AlphaVantageStockData());
	}
	
	@GetMapping(value = "/portfoliohistory", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<HashMap<String, Object>> getPortfolioHistory(@RequestHeader("Authorization") String token) {
		Portfolio portfolio = getUserPortfolio(token);
		List<ShareHolding> holdings = portfolio.getShareHoldings();
		List<HashMap<String, Object>> response = new ArrayList<HashMap<String,Object>>();
		
		LocalDateTime dateFrom = LocalDateTime.now(ZoneId.of("UTC"));
		for(ShareHolding holding: holdings) {
			if(holding.getEarliestHolding().isBefore(dateFrom))
				dateFrom = holding.getEarliestHolding();
		}
		LocalDateTime dateTo = LocalDateTime.now(ZoneId.of("UTC"));
		
		int startYear = dateFrom.getYear();
		int endYear = dateTo.getYear();
		
		for(int i = endYear; i >= startYear; i--) {
			HashMap<String, Object> yearData = new HashMap<String, Object>();
			List<HashMap<String, String>> holdingData = new ArrayList<HashMap<String,String>>();
			String yearOpen = "1-1-" + i;
			String yearClose = "1-1-" + (i + 1);
			
			Double portfolioOpen = 0D;
			Double portfolioClose = 0D;
			
			Date yearOpenDate = Date.from((LocalDateTime.of(i, 1, 1, 0, 0)).atZone(ZoneId.systemDefault()).toInstant());
			Date yearCloseDate = Date.from((LocalDateTime.of((i + 1), 1, 1, 0, 0)).atZone(ZoneId.systemDefault()).toInstant());
			
			if(i == endYear) {
				yearClose = dateTo.getDayOfMonth() + "-" + dateTo.getMonthValue() + "-" + i;
				yearCloseDate = Date.from((LocalDateTime.of(i, dateTo.getMonthValue(), dateTo.getDayOfMonth(), dateTo.getHour(), dateTo.getMinute())).atZone(ZoneId.systemDefault()).toInstant());
			}
			
			for(ShareHolding holding: holdings) {
				HashMap<String, String> holdingItem = new HashMap<String, String>();
				String shareSymbol = holding.getShare().getSymbol();
				
				int openQuantity = getShareUnit(yearOpenDate, holding);
				int closeQuantity = getShareUnit(yearCloseDate, holding);
				
				if(openQuantity != 0 || closeQuantity != 0) {
					String[] shareSymbolList = {shareSymbol};
					ShareHistoryRequest sharePriceRequest = new ShareHistoryRequest();
					sharePriceRequest.setDate(yearOpen);
					sharePriceRequest.setSymbols(Arrays.asList(shareSymbolList));
					Double holdingOpen = getSharePricesOnDay(sharePriceRequest).get(shareSymbol);
					
					sharePriceRequest.setDate(yearClose);
					Double holdingClose = getSharePricesOnDay(sharePriceRequest).get(shareSymbol);
					
					holdingItem.put("symbol", shareSymbol);
					holdingItem.put("yearOpen", new DecimalFormat("##.##").format(holdingOpen * openQuantity));
					holdingItem.put("yearClose", new DecimalFormat("##.##").format(holdingClose * closeQuantity));
					holdingItem.put("openQuantity", Integer.toString(openQuantity));
					holdingItem.put("closeQuantity", Integer.toString(closeQuantity));
					
					holdingData.add(holdingItem);
					
					portfolioOpen += holdingOpen * openQuantity;
					portfolioClose += holdingClose * closeQuantity;
				}
			}
			
			yearData.put("holdings", holdingData);
			
			yearData.put("year", i);
			yearData.put("yearOpen", new DecimalFormat("##.##").format(portfolioOpen));
			yearData.put("yearClose", new DecimalFormat("##.##").format(portfolioClose));
			
			response.add(yearData);
		}
		
		return response;
	}
	
	@GetMapping(value = "/history", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<Date, Double> getUserHoldingsHistory(@RequestHeader("Authorization") String token) {
		Portfolio portfolio = getUserPortfolio(token);
		
		Map<Date, Double> portfolioValueHistory = new LinkedHashMap<>();
		List<ShareHolding> holdings = portfolio.getShareHoldings();
		
		// Get symbols
		String[] symbols = new String[holdings.size()];
		for(int i = 0; i < holdings.size(); i++) {
			symbols[i] = holdings.get(i).getShare().getSymbol();
		}
		
		// TODO:
		// - receive timeframe and interval from request
		// - default: currently beginning to now and monthly interval
		
		LocalDateTime dateFrom = LocalDateTime.now(ZoneId.of("UTC"));
		for(ShareHolding holding: holdings) {
			if(holding.getEarliestHolding().isBefore(dateFrom))
				dateFrom = holding.getEarliestHolding();
		}
		LocalDateTime dateTo = LocalDateTime.now(ZoneId.of("UTC"));
		
		int interval = ShareDataHandler.INTERVAL_MONTHLY;
		
		
		Map<String, List<ShareHistory>> historicalData = dataHandler.getHistoricalSharePrices(symbols, dateFrom, dateTo, interval);
		List<ArrayList<Double>> data = new ArrayList<>();
		List<ArrayList<Integer>> shareQuantity = new ArrayList<>();
		List<Date> dates = new ArrayList<>();
		
		
		// Create List with Lists of every shares price in portfolio for the same date
		boolean first = true;
		Collection<List<ShareHistory>> historyLists = historicalData.values();
		for(List<ShareHistory> list: historyLists) {
			int i = 0;
			for(ShareHistory shareHistory: list) {
				ArrayList<Double> currentList;
				
				if(first) {
					currentList = new ArrayList<Double>();
					currentList.add(shareHistory.getClosePrice());
					data.add(currentList);
					dates.add(shareHistory.getDate().getTime());
				} else {
					currentList = data.get(i);
					currentList.add(shareHistory.getClosePrice());
				}
				
				i++;
			}
			first = false;
		}
		
		// Populate shareQuantity with keys of share symbols and values of lists that contain the quantity of the share at each interval
		Set<String> symbolKeys = historicalData.keySet();
		
		for(Date date : dates) { // Add empty lists first
			ArrayList<Integer> prices = new ArrayList<Integer>();
			
			for(String symbolKey : symbolKeys) {
				prices.add(getShareUnit(date, portfolio.getShareHolding(symbolKey)));
			}
			
			shareQuantity.add(prices);
		}
		
		for(int i = 0; i < dates.size(); i++) {
			Double[] shareValues = new Double[data.get(i).size()];
			data.get(i).toArray(shareValues);
			
			portfolioValueHistory.put(dates.get(i), calculatePortfolioValue(shareValues, shareQuantity.get(i)));
		}
		
		portfolioValueHistory.forEach((date, value) -> {
			System.out.println(date + " : " + value);
		});
		
		return portfolioValueHistory;
	}
	
	@PostMapping(value = "/portfoliovalue", produces = MediaType.APPLICATION_JSON_VALUE)
	public Double getPortfolioValue(@RequestHeader("Authorization") String token, @RequestBody ShareHistoryRequest request) {
		Portfolio portfolio = getUserPortfolio(token);
		Double value = 0D;
		
		List<String> requests = request.getSymbols();
		String[] dateString = request.getDate().split("-");
		LocalDateTime date = LocalDateTime.of(Integer.parseInt(dateString[2]), Integer.parseInt(dateString[1]), Integer.parseInt(dateString[0]), 0, 0);
		Date normalDate = Date.from(date.atZone(ZoneId.systemDefault()).toInstant());
		
		if(requests.size() == 1 && requests.get(0).equals("PORTFOLIO")) {
			if(portfolio != null) {
				List<ShareHolding> holdings = portfolio.getShareHoldings();
				List<String> symbols = new ArrayList<String>();
				ArrayList<Integer> shareQuantities = new ArrayList<Integer>();
				
				for(ShareHolding holding : holdings) {
					symbols.add(holding.getShare().getSymbol());
				}
				
				ShareHistoryRequest sharePriceRequest = new ShareHistoryRequest();
				sharePriceRequest.setDate(request.getDate());
				sharePriceRequest.setSymbols(symbols);
				
				Map<String, Double> sharePrices = getSharePricesOnDay(sharePriceRequest);
				Collection<Double> prices = sharePrices.values();
				Set<String> shareSymbols = sharePrices.keySet();
				
				for(String symbol : shareSymbols) {
					shareQuantities.add(getShareUnit(normalDate, portfolio.getShareHolding(symbol)));
				}
				
				Double[] shareValues = new Double[prices.size()];
				prices.toArray(shareValues);
				
				value = calculatePortfolioValue(shareValues, shareQuantities);
			}
		}
		
		return value;
	}
	
	@PostMapping(value = "/sharehistory", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, Double> getSharePricesOnDay(@RequestBody ShareHistoryRequest request) {
		String[] symbols = new String[request.getSymbols().size()];
		request.getSymbols().toArray(symbols);
		
		String[] dateString = request.getDate().split("-");
		LocalDateTime date = LocalDateTime.of(Integer.parseInt(dateString[2]), Integer.parseInt(dateString[1]), Integer.parseInt(dateString[0]), 0, 0);
		
		return dataHandler.getSharePriceOnDay(symbols, date);
	}
	
	private Double calculatePortfolioValue(Double[] shareValues, ArrayList<Integer> quantities) {
		Double total = new Double(0.0);
		
		for(int i = 0; i < shareValues.length; i++) {
			total += shareValues[i] * quantities.get(i);
		}
		
		return total;
	}
	
	private Portfolio getUserPortfolio(String token) {
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepository.findByUsername(username).orElse(null);
		
		return user.getPortfolio();
	}
	
	private Integer getShareUnit(Date date, ShareHolding shareHolding) {
		TreeMap<LocalDateTime, Integer> unitsThroughTime = shareHolding.getUnitsThroughTime();
		LocalDateTime convertedDate = date.toInstant()
	      .atZone(ZoneId.systemDefault())
	      .toLocalDateTime();
		
		if(unitsThroughTime.containsKey(convertedDate)) {
			return unitsThroughTime.get(convertedDate);
		} else {
			Set<LocalDateTime> dates = unitsThroughTime.keySet();
			LocalDateTime mostRecentDate = null;
			
			for(LocalDateTime currentDate : dates) {
				if(currentDate.isBefore(convertedDate)) {
					mostRecentDate = currentDate;
				} else {
					break;
				}
			}
			
			if(mostRecentDate != null) {
				return unitsThroughTime.get(mostRecentDate);
			}
		}
		
		return 0;
	}
}
