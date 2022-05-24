package io.portfol.manager.controllers;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHolding;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.services.ShareService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HoldingsController {

	private JwtTokenService jwtTokenService;
	private UserRepository userRepo;
	private ShareService shareService;
	
	@Autowired
	public HoldingsController(UserRepository userRepo, ShareService shareUpdater, JwtTokenService jwtTokenService) {
		this.jwtTokenService = jwtTokenService;
		this.userRepo = userRepo;
		this.shareService = shareUpdater;
	}
	
	@GetMapping(value = "/holdings", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<HashMap<String, String>> getHoldings(@RequestHeader("Authorization") String token) {
		List<HashMap<String, String>> response = new ArrayList<HashMap<String, String>>();
		
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepo.findByUsername(username).orElse(null);
		if(user != null) {
			Portfolio portfolio = user.getPortfolio();
			if(portfolio != null) {
				for(ShareHolding shareHolding : portfolio.getShareHoldings()) {
					Share holdingShare = shareHolding.getShare();
					shareService.updateShare(holdingShare);

					shareHolding.calculateTotalValue();
					HashMap<String, String> record = new HashMap<String, String>();
					record.put("symbol", shareHolding.getShare().getSymbol());
					record.put("buyPrice", new DecimalFormat("##.##").format(shareHolding.getTotalCost()));
					record.put("quantity", Integer.toString(shareHolding.getTotalUnits()));
					record.put("currentPrice", new DecimalFormat("##.##").format(shareHolding.getShare().getValue()));
					record.put("currentValue", new DecimalFormat("##.##").format(shareHolding.getTotalValue()));
					record.put("profit", new DecimalFormat("##.##").format(shareHolding.getTotalValue() - shareHolding.getTotalCost()));
					
					response.add(record);
				}
			}
			
			userRepo.save(user);
		}
		
		return response;
	}
}