package io.portfol.manager.services;

import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;

import io.portfol.manager.dal.ShareRepository;
import io.portfol.manager.dal.external.AlphaVantageStockData;
import io.portfol.manager.dal.external.ShareDataHandler;
import io.portfol.manager.dal.external.YahooStockData;
import io.portfol.manager.model.Share;

import static org.junit.Assert.*;

public class ShareServiceTests {

	private ShareService shareService;
	private ShareRepository mockShareRepo;
	private YahooStockData yahoo;
	private AlphaVantageStockData alpha;
	private ShareDataHandler shareDataHandler;
	
	@Before
	public void initTests() {
		mockShareRepo = mock(ShareRepository.class);
		shareService = new ShareService(mockShareRepo);
		
		yahoo = new YahooStockData();
		alpha = new AlphaVantageStockData();
		shareDataHandler = new ShareDataHandler(yahoo, alpha);
	}
	
	@Test
	public void test_share_can_be_created_if_in_API_and_DB() {		
		Share apiShare = shareDataHandler.getShare("AAPL");
		Share appleShare = new Share("Apple", 100.00, "AAPL", "Apple");
		
		when(mockShareRepo.findBySymbol("AAPL")).thenReturn(Optional.of(appleShare));
		
		Share newShare = shareService.getShare("AAPL");
		
		assertEquals(apiShare.getValue(), newShare.getValue(), 0.001);
		assertEquals(apiShare.getCompany(), newShare.getCompany());
		assertEquals(apiShare.getSymbol(), newShare.getSymbol());
	}
	
	@Test
	public void test_share_can_be_created_if_in_DB_only() {	
		Share abcdeShare = new Share("ABCDE", 100.00, "ABCDE", "ABCDE");
		
		when(mockShareRepo.findBySymbol("ABCDE")).thenReturn(Optional.of(abcdeShare));
		
		Share newShare = shareService.getShare("ABCDE");
		
		assertEquals(abcdeShare.getValue(), newShare.getValue(), 0.001);
		assertEquals(abcdeShare.getCompany(), newShare.getCompany());
		assertEquals(abcdeShare.getSymbol(), newShare.getSymbol());
	}
	
	@Test
	public void test_share_can_be_created_if_in_API_only() {	
		Share apiShare = shareDataHandler.getShare("AAPL");
		
		when(mockShareRepo.findBySymbol("AAPL")).thenReturn(Optional.empty());
		
		Share newShare = shareService.getShare("AAPL");
		
		assertEquals(apiShare.getValue(), newShare.getValue(), 0.001);
		assertEquals(apiShare.getCompany(), newShare.getCompany());
		assertEquals(apiShare.getSymbol(), newShare.getSymbol());
	}
	
	@Test
	public void test_update_share() {
		Share apiShare = shareDataHandler.getShare("AAPL");
		Share appleShare = new Share("Apple", 100.00, "AAPL", "Apple");
		
		shareService.updateShare(appleShare);
		
		assertEquals(apiShare.getValue(), appleShare.getValue(), 0.001);
		assertEquals(apiShare.getCompany(), appleShare.getCompany());
		assertEquals(apiShare.getSymbol(), appleShare.getSymbol());
	}
	
	@Test
	public void test_find_all_shares() {
		List<Share> shares = new ArrayList<Share>();
		
		shares.add(new Share("Apple", 100.00, "AAPL", "Apple Inc."));
		shares.add(new Share("Tesla", 75.00, "TSLA", "Tesla"));
		shares.add(new Share("Google", 50.00, "GOOGL", "Alphabet Inc."));
		
		when(mockShareRepo.findAll()).thenReturn(shares);
		
		List<Share> returnedShares = shareService.findAll();
		
		assertEquals(shares, returnedShares);
	}
}
