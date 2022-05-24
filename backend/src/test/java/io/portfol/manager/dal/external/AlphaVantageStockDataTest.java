package io.portfol.manager.dal.external;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHistory;

public class AlphaVantageStockDataTest {

	private AlphaVantageStockData alpha;

	@Before
	public void setUpBefore() {
		alpha = new AlphaVantageStockData();
	}
	
	@After
	public void sleep() throws InterruptedException {
		TimeUnit.SECONDS.sleep(30);
	}

	@Test
	public void that_getShare_with_working_symbol_retrieves_share() throws InterruptedException {
		String symbol = "TSLA";

		alpha = new AlphaVantageStockData();
		Share share = alpha.getShare(symbol);

		assertEquals(symbol, share.getSymbol());
	}

	@Test
	public void that_getSharePrice_returns_double_above_zero_for_working_stock() throws InterruptedException {
		Double shareValue = alpha.getSharePrice("TSLA");

		assertTrue(shareValue > 0);
	}

	@Test
	public void that_getSharePrices_returns_map_of_share_prices() throws InterruptedException {
		String[] symbols = { "TSLA", "IBM" };

		Map<String, Double> sharePrices = new HashMap<>();

		sharePrices.put(symbols[0], 100.00);
		sharePrices.put(symbols[1], 100.00);

		Map<String, Double> result = alpha.getSharePrices(symbols);

		result.forEach((symbol, value) -> {
			assertTrue(sharePrices.containsKey(symbol));
			assertTrue(value > 0.00);
		});
	}

	@Test
	public void that_getHistoricalSharePrices_returns_map_of_monthly_historical_shareHistories() throws InterruptedException {
		String[] symbols = { "TSLA" };
		Calendar dateFrom = new GregorianCalendar(2019, 0, 1);
		Calendar dateTo = new GregorianCalendar(2020, 0, 1);
		int dataInterval = 2;
		
		Map<String, List<ShareHistory>> historicalData = new HashMap<>();
		List<ShareHistory> shareHistories = new ArrayList<>();
		
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 0, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 1, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 2, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 3, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 4, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 5, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 6, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 7, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 8, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 9, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 10, 1), 100.00, 100.00, 100.00, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 11, 1), 100.00, 100.00, 100.00, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2020, 0, 1), 100.00, 100.00, 100.00, 100.00));
		
		historicalData.put("TSLA", shareHistories);
		
		Map<String, List<ShareHistory>> result = alpha.getHistoricalSharePrices(symbols, dateFrom, dateTo, dataInterval);
		
		result.forEach((symbol, data) -> {
			assertTrue(symbol.equals(symbols[0]));
			for(int i = 0; i < data.size(); i++) {
				ShareHistory resultHistory = data.get(i);
				ShareHistory sampleHistory = shareHistories.get(i);
				
				assertEquals(sampleHistory.getSymbol(), resultHistory.getSymbol());
				assertEquals(sampleHistory.getDate().get(Calendar.MONTH), resultHistory.getDate().get(Calendar.MONTH));
				System.out.println(sampleHistory.getDate().get(Calendar.YEAR) + "/" + sampleHistory.getDate().get(Calendar.MONTH));
				assertTrue(resultHistory.getOpenPrice() > 0.00);
				System.out.println(resultHistory.getValue());
			}
		});
	}
	
	@Test
	public void that_getHistoricalSharePrices_returns_map_of_weekly_historical_shareHistories() throws InterruptedException {
		String[] symbols = { "TSLA" };
		Calendar dateFrom = new GregorianCalendar(2019, 5, 1);
		Calendar dateTo = new GregorianCalendar(2020, 0, 1);
		int dataInterval = 1;
		
		Map<String, List<ShareHistory>> historicalData = new HashMap<>();
		List<ShareHistory> shareHistories = new ArrayList<>();
		
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 0, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 1, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 2, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 3, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 4, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 5, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 6, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 7, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 8, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 9, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 10, 1), 100.00, 100.00, 100.00, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 11, 1), 100.00, 100.00, 100.00, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2020, 0, 1), 100.00, 100.00, 100.00, 100.00));
		
		historicalData.put("TSLA", shareHistories);
		
		Map<String, List<ShareHistory>> result = alpha.getHistoricalSharePrices(symbols, dateFrom, dateTo, dataInterval);
		
		result.forEach((symbol, data) -> {
			assertTrue(symbol.equals(symbols[0]));
			for(int i = 0; i < data.size(); i++) {
				ShareHistory resultHistory = data.get(i);
				ShareHistory sampleHistory = shareHistories.get(i);
				
				assertEquals(sampleHistory.getSymbol(), resultHistory.getSymbol());
				assertEquals(sampleHistory.getDate().get(Calendar.MONTH), resultHistory.getDate().get(Calendar.MONTH));
				System.out.println(sampleHistory.getDate().get(Calendar.YEAR) + "/" + sampleHistory.getDate().get(Calendar.MONTH));
				assertTrue(resultHistory.getOpenPrice() > 0.00);
				System.out.println(resultHistory.getValue());
			}
		});
	}
	@Test
	public void that_getHistoricalSharePrices_returns_map_of_daily_historical_shareHistories() throws InterruptedException {
		String[] symbols = { "TSLA" };
		Calendar dateFrom = new GregorianCalendar(2019, 9, 1);
		Calendar dateTo = new GregorianCalendar(2020, 0, 1);
		int dataInterval = 0;
		
		Map<String, List<ShareHistory>> historicalData = new HashMap<>();
		List<ShareHistory> shareHistories = new ArrayList<>();
		
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 0, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 1, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 2, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 3, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 4, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 5, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 6, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 7, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 8, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 9, 1), 100.0, 100.0, 100.0, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 10, 1), 100.00, 100.00, 100.00, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2019, 11, 1), 100.00, 100.00, 100.00, 100.00));
		shareHistories.add(new ShareHistory("TSLA", new GregorianCalendar(2020, 0, 1), 100.00, 100.00, 100.00, 100.00));
		
		historicalData.put("TSLA", shareHistories);
		
		Map<String, List<ShareHistory>> result = alpha.getHistoricalSharePrices(symbols, dateFrom, dateTo, dataInterval);
		
		result.forEach((symbol, data) -> {
			assertTrue(symbol.equals(symbols[0]));
			for(int i = 0; i < data.size(); i++) {
				ShareHistory resultHistory = data.get(i);
				ShareHistory sampleHistory = shareHistories.get(i);
				
				assertEquals(sampleHistory.getSymbol(), resultHistory.getSymbol());
				assertEquals(sampleHistory.getDate().get(Calendar.MONTH), resultHistory.getDate().get(Calendar.MONTH));
				System.out.println(sampleHistory.getDate().get(Calendar.YEAR) + "/" + sampleHistory.getDate().get(Calendar.MONTH));
				assertTrue(resultHistory.getOpenPrice() > 0.00);
				System.out.println(resultHistory.getValue());
			}
		});
	}
}
