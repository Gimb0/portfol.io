package io.portfol.manager.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.exception.ResourceNotFoundException;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHolding;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.services.ShareService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SharesController {

	private JwtTokenService jwtTokenService;
	private ShareService shareService;
	private UserRepository userRepo;
	
	@Autowired
	public SharesController(JwtTokenService jwtTokenService, ShareService shareService, UserRepository userRepo) {
		this.jwtTokenService = jwtTokenService;
		this.shareService = shareService;
		this.userRepo = userRepo;
	}
	
	@GetMapping(value = "/shares", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<HashMap<String, String>> getAllShares(@RequestHeader("Authorization") String token) {
		List<HashMap<String, String>> shareList = new ArrayList<>();
		List<Share> shares = shareService.findAll();		
		
		for(Share share : shares) {
			HashMap<String, String> shareObject = new HashMap<String, String>();
			
			shareObject.put("symbol", share.getSymbol());
			shareObject.put("name", share.getName());
			shareObject.put("value", Double.toString(share.getValue()));
			shareObject.put("stockExchange", share.getStockExchange());
			shareObject.put("company", share.getCompany());
			
			shareList.add(shareObject);
		}
		
		return shareList;
	}
	
	@GetMapping(value = "/ownedshares", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<HashMap<String, String>> getOwnedShares(@RequestHeader("Authorization") String token) {
		List<HashMap<String, String>> shareList = new ArrayList<>();
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepo.findByUsername(username).orElse(null);
		List<Share> shares = new ArrayList<Share>();
		
		if(user != null) {
			Portfolio portfolio = user.getPortfolio();
			if(portfolio != null) {
				for(ShareHolding shareHolding : portfolio.getShareHoldings()) {
					if(shareHolding.getTotalUnits() > 0) shares.add(shareHolding.getShare());
				}
			}
		}
		
		for(Share share : shares) {
			HashMap<String, String> shareObject = new HashMap<String, String>();
			
			shareObject.put("symbol", share.getSymbol());
			shareObject.put("name", share.getName());
			shareObject.put("value", Double.toString(share.getValue()));
			shareObject.put("stockExchange", share.getStockExchange());
			shareObject.put("company", share.getCompany());
			
			shareList.add(shareObject);
		}
		
		return shareList;
	}
	
	@GetMapping(value = "/sharedata", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, String> getShare(@RequestHeader("Authorization") String token, @RequestParam(name = "sharesymbol", required = true) String symbol) {
		Map<String, String> share = new HashMap<String, String>();
		
		Share foundShare = shareService.getShare(symbol);
		
		if(foundShare != null){
			share.put("symbol", foundShare.getSymbol());
			share.put("name", foundShare.getName());
			share.put("value", Double.toString(foundShare.getValue()));
			share.put("stockExchange", foundShare.getStockExchange());
			share.put("company", foundShare.getCompany());
		} else {
			throw new ResourceNotFoundException("Share not found!");
		}
		
		return share;
	}
}
