package io.portfol.manager.dal.external;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHistory;

public class ShareDataHandlerTest {

	private ShareDataHandler dataHandler;
	
	private YahooStockData yahoo;
	private AlphaVantageStockData alpha;

	@Before
	public void setUp() throws Exception {
		yahoo = mock(YahooStockData.class);
		alpha = mock(AlphaVantageStockData.class);
		
		dataHandler = new ShareDataHandler(yahoo, alpha);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void that_getShare_returns_share() throws IOException {
		when(yahoo.getShare(anyString())).thenReturn(new Share());
		
		assertTrue(dataHandler.getShare("TSLA") instanceof Share);
	}

	@Test
	public void that_getShare_calls_yahoo_getShare() throws IOException {
		dataHandler.getShare("TSLA");
		
		verify(yahoo, times(1)).getShare("TSLA");
	}
	
	@Test
	public void that_getShare_calls_alpha_getShare_when_yahoo_throws_IOException() throws IOException, InterruptedException {
		when(yahoo.getShare(anyString())).thenThrow(new IOException());
		when(alpha.getShare(anyString())).thenReturn(new Share());
		
		Share share = dataHandler.getShare("TSLA");
		
		verify(alpha, times(1)).getShare("TSLA");
		
		assertTrue(share instanceof Share);
	}
	
	@Test
	public void that_getSharePrice_returns_double_above_zero() throws IOException {
		when(yahoo.getSharePrice("TSLA")).thenReturn(100.50);
		
		Object price = dataHandler.getSharePrice("TSLA");
		
		assertTrue(price instanceof Double);
		assertTrue((Double) price > 0.0);
		
		verify(yahoo, times(1)).getSharePrice("TSLA");
	}
	
	@Test
	public void that_getSharePrice_calls_alpha_when_yahoo_throws_IOException() throws IOException, InterruptedException {
		when(yahoo.getSharePrice("TSLA")).thenThrow(new IOException());
		when(alpha.getSharePrice("TSLA")).thenReturn(1009.50);
		
		Double price = dataHandler.getSharePrice("TSLA");
		
		assertEquals(1009.50, price, 0.00);
		
		verify(alpha, times(1)).getSharePrice("TSLA");
	}
	
	@Test
	public void that_getSharePrices_returns_map_of_share_prices() throws IOException {
		Map<String, Double> sharePrices = new HashMap<>();
		sharePrices.put("TSLA", 1073.50);
		sharePrices.put("AAPL", 364.50);
		
		String[] symbols = {"TSLA", "AAPL"};
		
		when(yahoo.getSharePrices(symbols)).thenReturn(sharePrices);
		
		Map<String, Double> result = dataHandler.getSharePrices(symbols);
		
		assertEquals(sharePrices, result);
		
		verify(yahoo, times(1)).getSharePrices(symbols);
	}
	
	
	@Test
	public void that_getSharePrices_calls_alpha_on_IOException() throws IOException, InterruptedException {
		Map<String, Double> sharePrices = new HashMap<>();
		sharePrices.put("TSLA", 1073.50);
		sharePrices.put("AAPL", 364.50);
		
		String[] symbols = {"TSLA", "AAPL"};
		
		when(yahoo.getSharePrices(symbols)).thenThrow(new IOException());
		when(alpha.getSharePrices(symbols)).thenReturn(sharePrices);
		
		Map<String, Double> result = dataHandler.getSharePrices(symbols);
		
		assertEquals(sharePrices, result);
		
		verify(yahoo, times(1)).getSharePrices(symbols);
		verify(alpha, times(1)).getSharePrices(symbols);
		
	}
	
	@Test
	public void that_getHistoricalSharePrices_returns_Map_containing_list_of_ShareHistories() throws IOException {
		List<ShareHistory> shareHistories = new ArrayList<>();
		shareHistories.add(new ShareHistory());
		shareHistories.add(new ShareHistory());
		
		Map<String, List<ShareHistory>> historicalData = new HashMap<>();
		historicalData.put("TSLA", shareHistories);
		historicalData.put("AAPL", shareHistories);
		
		String[] symbols = {"TSLA", "AAPL"};
		
		when(yahoo.getHistoricalSharePrices(any(), any(), any(), anyInt())).thenReturn(historicalData);
	
		LocalDateTime from = LocalDateTime.of(2019, 1, 1, 0, 0);
		LocalDateTime to = LocalDateTime.now();
		
		Map<String, List<ShareHistory>> result = dataHandler.getHistoricalSharePrices(symbols, from, to, 2);
		
		assertEquals(historicalData, result);
		
		verify(yahoo, times(1)).getHistoricalSharePrices(any(), any(), any(), anyInt());
	}
	
	@Test
	public void that_getHistoricalSharePrices_calls_alpha_on_IOException_and_returns_Map_containing_list_of_ShareHistories() throws IOException, InterruptedException {
		List<ShareHistory> shareHistories = new ArrayList<>();
		shareHistories.add(new ShareHistory());
		shareHistories.add(new ShareHistory());
		
		Map<String, List<ShareHistory>> historicalData = new HashMap<>();
		historicalData.put("TSLA", shareHistories);
		historicalData.put("AAPL", shareHistories);
		
		String[] symbols = {"TSLA", "AAPL"};
		
		when(yahoo.getHistoricalSharePrices(any(), any(), any(), anyInt())).thenThrow(new IOException());
		when(alpha.getHistoricalSharePrices(any(), any(), any(), anyInt())).thenReturn(historicalData);
	
		LocalDateTime from = LocalDateTime.of(2019, 1, 1, 0, 0);
		LocalDateTime to = LocalDateTime.now();
		
		Map<String, List<ShareHistory>> result = dataHandler.getHistoricalSharePrices(symbols, from, to, 2);
		
		assertEquals(historicalData, result);
		
		verify(yahoo, times(1)).getHistoricalSharePrices(any(), any(), any(), anyInt());
		verify(alpha, times(1)).getHistoricalSharePrices(any(), any(), any(), anyInt());
	}
	
}
