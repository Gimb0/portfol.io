package io.portfol.manager.dal.external;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHistory;

public class ShareDataHandler {

	static public final int INTERVAL_DAILY = 0;
	static public final int INTERVAL_WEEKLY = 1;
	static public final int INTERVAL_MONTHLY = 2;
	
	YahooStockData yahoo;
	AlphaVantageStockData alpha;
	
	
	public ShareDataHandler(YahooStockData yahoo, AlphaVantageStockData alpha) {
		this.yahoo = yahoo;
		this.alpha = alpha;
	}
	
	public Share getShare(String symbol) {
		Share share = new Share();
		
		try {
			share = yahoo.getShare(symbol);
		} catch (IOException e) {
			try {
				share = alpha.getShare(symbol);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
		}
		
		return share;
	}
	
	public Double getSharePrice(String symbol) {
		Double price = 0.0;
		
		try {
			price = yahoo.getSharePrice(symbol);
		} catch (IOException e) {
			try {
				price = alpha.getSharePrice(symbol);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
		}
		
		return price;
	}
	
	
	// Get live prices for array of symbols
	public Map<String, Double> getSharePrices(String[] symbols) {
		Map<String, Double> stockPrices = new HashMap<String, Double>();

		try {
			stockPrices = yahoo.getSharePrices(symbols);
		} catch (IOException e) {
			try {
				stockPrices = alpha.getSharePrices(symbols);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
		}
		
		return stockPrices;
	}
	
	public Map<String, Double> getSharePriceOnDay(String[] symbols, LocalDateTime date) {
		Map<String, Double> shareData = new HashMap<>();
		Map<String, List<ShareHistory>> sharesHistories = null;
		
		int interval = 0;

		ZoneId zoneId = ZoneId.of("UTC+10:00");
		ZonedDateTime zdt = date.atZone(zoneId);
		Calendar dateFrom = GregorianCalendar.from(zdt); 
		Calendar dateTo = Calendar.getInstance();
		
		try {
			sharesHistories = yahoo.getHistoricalSharePrices(symbols, dateFrom, dateTo, interval);
		} catch (IOException e) {
			try {
				sharesHistories = alpha.getHistoricalSharePrices(symbols, dateFrom, dateTo, interval);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
		}
		
		sharesHistories.forEach((key, value) -> {
			shareData.put(key, value.get(0).getClosePrice());
		});
		
		return shareData;
	}
	
	
	public Map<String, List<ShareHistory>> getHistoricalSharePrices(String[] symbols, LocalDateTime from, LocalDateTime to, int interval) {
		Map<String, List<ShareHistory>> sharesHistories = null;
		
		ZoneId zoneId = ZoneId.of("UTC+10:00");
		ZonedDateTime zdt = from.atZone(zoneId);
		Calendar dateFrom = GregorianCalendar.from(zdt); 
		
		zdt = to.atZone(zoneId);
		Calendar dateTo = GregorianCalendar.from(zdt);
		
		try {
			sharesHistories = yahoo.getHistoricalSharePrices(symbols, dateFrom, dateTo, interval);
		} catch (IOException e) {
			try {
				sharesHistories = alpha.getHistoricalSharePrices(symbols, dateFrom, dateTo, interval);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
		}
		
		return sharesHistories;
	}
	
}
