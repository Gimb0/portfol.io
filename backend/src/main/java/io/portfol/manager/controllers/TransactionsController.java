package io.portfol.manager.controllers;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.exception.ResourceNotFoundException;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareTransaction;
import io.portfol.manager.model.dto.TransactionRequest;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.services.ShareService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionsController {

	private JwtTokenService jwtTokenService;
	private UserRepository userRepo;
	private ShareService shareService;

	@Autowired
	public TransactionsController(JwtTokenService jwtTokenService, UserRepository userRepo, ShareService shareService) {
		this.jwtTokenService = jwtTokenService;
		this.userRepo = userRepo;
		this.shareService = shareService;
	}
	
	@PostMapping(value = "/transactions", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<HashMap<String, String>> getTransactions(@RequestHeader("Authorization") String token) {
		List<HashMap<String, String>> transactions = new ArrayList<HashMap<String,String>>();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepo.findByUsername(username).orElse(null);
		
		if (user != null) {
			Portfolio portfolio = user.getPortfolio();

			if (portfolio != null) {
				for(ShareTransaction shareTransaction : portfolio.getShareTransactions()) {
					HashMap<String, String> transactionObject = new HashMap<String, String>();
					
					transactionObject.put("id", Integer.toString(shareTransaction.getId()));
					transactionObject.put("share", shareTransaction.getShare().getSymbol());
					transactionObject.put("buying", Boolean.toString(shareTransaction.isBuying()));
					transactionObject.put("totalPrice", Double.toString(shareTransaction.getTotalPrice()));
					transactionObject.put("units", Integer.toString(shareTransaction.getUnits()));
					transactionObject.put("avgPrice", Double.toString(shareTransaction.getAvgPrice()));
					transactionObject.put("date", shareTransaction.getTransactionDate().format(formatter));
					
					transactions.add(transactionObject);
				}
			}
		}
		
		return transactions;
	}

	@PostMapping(value = "/transaction")
	public ResponseEntity<String> newTransaction(@RequestHeader("Authorization") String token,
			@RequestBody TransactionRequest transactionRequest) throws ParseException {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

		String shareSymbol = transactionRequest.getShare();
		double totalPrice = transactionRequest.getTotalPrice();
		LocalDateTime date = LocalDate.parse(transactionRequest.getDate(), formatter).atStartOfDay();
		int units = transactionRequest.getUnits();
		boolean buying = transactionRequest.getBuying();
		
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepo.findByUsername(username).orElse(null);

		Share share = shareService.getShare(shareSymbol);

		if (user != null && share != null) {
			Portfolio portfolio = user.getPortfolio();
			if (portfolio != null && share != null) {
				ShareTransaction shareTransaction = new ShareTransaction(totalPrice, buying, units, share, date);
				portfolio.addShareTransaction(shareTransaction);
				userRepo.save(user);
				return new ResponseEntity<>(HttpStatus.OK);
			}
		} else {
			throw new ResourceNotFoundException("Share not found!");
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping(value = "/edittransaction")
	public ResponseEntity<String> editTransaction(@RequestHeader("Authorization") String token,
			@RequestParam(name = "id", required = true) int id, @RequestBody TransactionRequest transactionRequest) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

		String newShareSymbol = transactionRequest.getShare();
		double newTotalPrice = transactionRequest.getTotalPrice();
		LocalDateTime newDate = LocalDate.parse(transactionRequest.getDate(), formatter).atStartOfDay();
		int newUnits = transactionRequest.getUnits();
		boolean newBuying = transactionRequest.getBuying();

		Share newShare = shareService.getShare(newShareSymbol);

		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepo.findByUsername(username).orElse(null);

		if (user != null && newShare != null) {
			Portfolio portfolio = user.getPortfolio();

			if (portfolio != null) {
				ShareTransaction newTransaction = new ShareTransaction(newTotalPrice, newBuying, newUnits, newShare,
						newDate);

				portfolio.editTransaction(id, newTransaction);
				userRepo.save(user);
				return new ResponseEntity<>(HttpStatus.OK);
			}

		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping(value = "/deletetransaction")
	public ResponseEntity<String> deleteTransaction(@RequestHeader("Authorization") String token,
			@RequestParam(name = "id", required = true) int id) {
		
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		User user = userRepo.findByUsername(username).orElse(null);
		
		if (user != null) {
			Portfolio portfolio = user.getPortfolio();

			if (portfolio != null) {
				portfolio.deleteTransaction(id);
				userRepo.save(user);
				return new ResponseEntity<>(HttpStatus.OK);
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
