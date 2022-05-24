package io.portfol.manager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import io.portfol.manager.dal.ShareRepository;
import io.portfol.manager.dal.external.AlphaVantageStockData;
import io.portfol.manager.dal.external.ShareDataHandler;
import io.portfol.manager.dal.external.YahooStockData;
import io.portfol.manager.model.Share;

@Service
public class ShareService {
	
	private ShareRepository shareRepo;
	
	public ShareService(ShareRepository shareRepo) {
		this.shareRepo = shareRepo;
	}
	
	public Share getShare(String symbol) {
		Share share = null;
		
		/*
		 * If share exists in DB but not API, use the one in DB and no update
		 * If share does not exist in DB, but in API, use API and add share to DB
		 * If share exists in both DB and API, use API value and update to DB,
		 * 		if company name (from Yahoo API) is not the same as one in DB, update as well
		 * If doesn't exist in either sources, throw 404
		 */
		
		YahooStockData yahoo = new YahooStockData();
		AlphaVantageStockData alpha = new AlphaVantageStockData();
		ShareDataHandler shareDataHandler = new ShareDataHandler(yahoo, alpha);
		
		Share apiShare;
		
		try {
			apiShare = shareDataHandler.getShare(symbol);			
		} catch (NullPointerException e) {
			apiShare = null;
		}
		
		Optional<Share> optionalShare = shareRepo.findBySymbol(symbol);
		
		if(optionalShare.isPresent() || apiShare != null) {
			if(optionalShare.isPresent() && apiShare != null) { // Share exists in both DB and API
				share = optionalShare.get();
				share.setValue(apiShare.getValue());
				if(!(share.getCompany().equals(apiShare.getCompany()))) {
					share.setCompany(apiShare.getCompany());
				}
			} else if(optionalShare.isPresent()) { // Share only exists in DB
				share = optionalShare.get();
			} else { // Share only exists in API
				share = new Share();
				share.setSymbol(symbol);
				share.setValue(apiShare.getValue());
				share.setStockExchange("N/A");
				if(apiShare.getCompany() != null) {
					share.setCompany(apiShare.getCompany());
					share.setName(apiShare.getCompany());
				} else {
					share.setCompany("N/A");
					share.setName("N/A");
				}
			}
			
			shareRepo.save(share);
		}
		
		return share;
	}

	public void updateShare(Share share) {
		YahooStockData yahoo = new YahooStockData();
		AlphaVantageStockData alpha = new AlphaVantageStockData();
		ShareDataHandler shareDataHandler = new ShareDataHandler(yahoo, alpha);
		
		Share apiShare = shareDataHandler.getShare(share.getSymbol());
		
		if(apiShare.getSymbol() != null) {
			share.setValue(apiShare.getValue());
			
			if(apiShare.getCompany() != null && !(apiShare.getCompany().equals(share.getCompany()))) {
				share.setCompany(apiShare.getCompany());
			}
		}
		
		shareRepo.save(share);
	}

	public List<Share> findAll() {
		return (List<Share>) shareRepo.findAll();
	}
}
