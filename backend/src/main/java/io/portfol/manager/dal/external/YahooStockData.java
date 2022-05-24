package io.portfol.manager.dal.external;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHistory;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.HistoricalQuote;
import yahoofinance.histquotes.Interval;

public class YahooStockData {

	private Share share;

	public YahooStockData() {
		share = new Share();
	}

	public Share getShare(String symbol) throws IOException {
		Stock stock = YahooFinance.get(symbol);
		share.setSymbol(symbol);
		// share.setStockExchange(stock.getStockExchange());
		share.setValue(stock.getQuote().getPrice().doubleValue());
		share.setCompany(stock.getName());

		return share;
	}

	public Double getSharePrice(String symbol) throws IOException {
		return YahooFinance.get(symbol).getQuote().getPrice().doubleValue();
	}

	public Map<String, Double> getSharePrices(String[] symbols) throws IOException {
		Map<String, Stock> stocks;

		stocks = YahooFinance.get(symbols);

		Map<String, Double> stockPrices = new HashMap<>();

		stocks.forEach((symbol, stock) -> {
			stockPrices.put(symbol, stock.getQuote().getPrice().doubleValue());
		});

		return stockPrices;
	}

	public Map<String, List<ShareHistory>> getHistoricalSharePrices(String[] symbols, Calendar dateFrom,
			Calendar dateTo, int dataInterval) throws IOException {
		Map<String, List<ShareHistory>> historicalStocks = new HashMap<>();
		Map<String, Stock> stocks = YahooFinance.get(symbols);

		Interval interval;
		if (dataInterval == ShareDataHandler.INTERVAL_DAILY)
			interval = Interval.DAILY;
		else if (dataInterval == ShareDataHandler.INTERVAL_WEEKLY)
			interval = Interval.WEEKLY;
		else
			interval = Interval.MONTHLY;

		stocks.forEach((symbol, stock) -> {
			List<HistoricalQuote> historicalQuotes = new ArrayList<>();
			try {
				historicalQuotes = stock.getHistory(dateFrom, dateTo, interval);
			} catch (IOException e) {
				e.printStackTrace();
			}
			List<ShareHistory> shareHistory = new ArrayList<>();

			for (HistoricalQuote quote : historicalQuotes) {
				ShareHistory share = new ShareHistory(stock.getSymbol(), quote.getDate(), quote.getOpen().doubleValue(),
						quote.getHigh().doubleValue(), quote.getLow().doubleValue(), quote.getClose().doubleValue());
				shareHistory.add(share);
			}

			historicalStocks.put(symbol, shareHistory);
		});

		return historicalStocks;
	}
}
