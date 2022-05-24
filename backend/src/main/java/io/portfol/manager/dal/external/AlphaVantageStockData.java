package io.portfol.manager.dal.external;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import com.crazzyghost.alphavantage.AlphaVantage;
import com.crazzyghost.alphavantage.AlphaVantageException;
import com.crazzyghost.alphavantage.Config;
import com.crazzyghost.alphavantage.parameters.DataType;
import com.crazzyghost.alphavantage.timeseries.response.QuoteResponse;
import com.crazzyghost.alphavantage.timeseries.response.StockUnit;
import com.crazzyghost.alphavantage.timeseries.response.TimeSeriesResponse;

import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHistory;

public class AlphaVantageStockData {

	private final String API_KEY = "X2NF0YKDN5O8AXXN";
	private final Config config;
	Share share;
	List<ShareHistory> history;

	public AlphaVantageStockData() {
		config = Config.builder().key(API_KEY).timeOut(3000).build();

		AlphaVantage.api().init(config);
	}

	private void getStockQuoteData(String symbol) {
		share = new Share();
		AlphaVantage.api()
				.timeSeries()
				.quote()
				.forSymbol(symbol)
				.dataType(DataType.JSON)
				.onSuccess(e->handleShareQuote((QuoteResponse) e))
				.onFailure(e->handleFailure(e))
				.fetch();
	}

	private void getStockSeriesData(String symbol, int dataInterval, Calendar dateFrom, Calendar dateTo) {
		history = new ArrayList<ShareHistory>();
		if (dataInterval == ShareDataHandler.INTERVAL_DAILY) {
			AlphaVantage.api()
					.timeSeries()
					.daily()
					.adjusted()
					.forSymbol(symbol)
					.dataType(DataType.JSON)
					.onSuccess(e -> handleShareTimeSeries(((TimeSeriesResponse) e).getStockUnits(), dateFrom, dateTo))
					.fetch();
		} else if (dataInterval == ShareDataHandler.INTERVAL_WEEKLY) {
			AlphaVantage.api()
					.timeSeries()
					.weekly()
					.adjusted()
					.forSymbol(symbol)
					.dataType(DataType.JSON)
					.onSuccess(e -> handleShareTimeSeries(((TimeSeriesResponse) e).getStockUnits(), dateFrom, dateTo))
					.fetch();
		} else {
			AlphaVantage.api()
					.timeSeries()
					.monthly()
					.adjusted()
					.forSymbol(symbol)
					.dataType(DataType.JSON)
					.onSuccess(e -> handleShareTimeSeries(((TimeSeriesResponse) e).getStockUnits(), dateFrom, dateTo))
					.fetch();
		}
	}

	public Share getShare(String symbol) throws InterruptedException {
		getStockQuoteData(symbol);
		
		TimeUnit.SECONDS.sleep(2);
		
		System.out.println("[alpha] getShare");
		System.out.println(share.getSymbol());
		
		return share;
	}

	public Double getSharePrice(String symbol) throws InterruptedException {
		getStockQuoteData(symbol);
		
		TimeUnit.SECONDS.sleep(2);
		
		return share.getValue();
	}

	public Map<String, Double> getSharePrices(String[] symbols) throws InterruptedException {
		Map<String, Double> sharePriceMap = new HashMap<>();

		for (String symbol : symbols) {
			getStockQuoteData(symbol);
			TimeUnit.SECONDS.sleep(2);
			sharePriceMap.put(symbol, share.getValue());
		}

		return sharePriceMap;
	}

	public Map<String, List<ShareHistory>> getHistoricalSharePrices(String[] symbols, Calendar dateFrom,
			Calendar dateTo, int dataInterval) throws InterruptedException {
		
		Map<String, List<ShareHistory>> historicalStocks = new HashMap<>();

		for (String symbol : symbols) {
			getStockSeriesData(symbol, dataInterval, dateTo, dateFrom);
			
			TimeUnit.SECONDS.sleep(2);
			
			history.forEach(stock -> {stock.setSymbol(symbol);});
			historicalStocks.put(symbol, history);
		}

		return historicalStocks;
	}

	private void handleFailure(AlphaVantageException e) {
		// TODO something
		System.out.println(e.getMessage());
		System.out.println("Something Failed");
	}

	private void handleShareQuote(QuoteResponse response) {	
		System.out.println("[alpha] Handle Share Quote");
		
		this.share.setSymbol(response.getSymbol());
		System.out.println(share.getSymbol());
		
		this.share.setValue(response.getPrice());
		System.out.println(share.getValue());
	}

	private void handleShareTimeSeries(List<StockUnit> stocks, Calendar dateFrom, Calendar dateTo) {
		stocks.stream().forEach(stock -> {
			String[] dateComponents = stock.getDate().split("-");
			int[] date = { Integer.parseInt(dateComponents[0]), Integer.parseInt(dateComponents[1]), Integer.parseInt(dateComponents[2]) };
			Calendar stockDate = new GregorianCalendar();
			stockDate.set(date[0], date[1], date[2]);
			if(stockDate.compareTo(dateFrom) >= 0 && stockDate.compareTo(dateTo) <= 0) {
				ShareHistory shareHistory = new ShareHistory();
				shareHistory.setValue(stock.getAdjustedClose());
				shareHistory.setDate(stockDate);
			}
		});
		
	}
}
