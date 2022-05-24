package io.portfol.manager.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.TreeMap;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import io.portfol.manager.model.entity.User;

@Entity
public class Portfolio {

	@Id
	@GeneratedValue
	private int id;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@Fetch(FetchMode.SELECT)
	@JoinColumn(name = "portfolio_id")
	private List<ShareHolding> shareHoldings;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@Fetch(FetchMode.SELECT)
	@JoinColumn(name = "portfolio_id")
	private List<ShareTransaction> shareTransactions;
	private double totalValue;

	@OneToOne(mappedBy = "portfolio")
	@JoinColumn(name = "user_id")
	private User user;

	public Portfolio() {
	}

	public Portfolio(User user) {
		super();
		this.shareHoldings = new ArrayList<ShareHolding>();
		this.shareTransactions = new ArrayList<ShareTransaction>();
		this.totalValue = 0;
		this.user = user;
	}

	public List<ShareHolding> getShareHoldings() {
		return shareHoldings;
	}

	public void setShareHoldings(List<ShareHolding> shares) {
		this.shareHoldings = shares;
	}

	public List<ShareTransaction> getShareTransactions() {
		return shareTransactions;
	}

	public void setShareTransactions(List<ShareTransaction> shareTransactions) {
		this.shareTransactions = shareTransactions;
	}

	public double getTotalValue() {
		return totalValue;
	}

	public void setTotalValue(double totalValue) {
		this.totalValue = totalValue;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ShareTransaction getShareTransactionById(int id) {
		for (ShareTransaction shareTransaction : shareTransactions) {
			if (shareTransaction.getId() == id) {
				return shareTransaction;
			}
		}

		return null;
	}

	public ShareHolding getShareHolding(Share share) {
		for (ShareHolding sh : shareHoldings) {
			if (sh.getShare().equals(share)) {
				return sh;
			}
		}

		return null;
	}

	public void addShareTransaction(ShareTransaction shareTransaction) {
		if (!shareTransactions.contains(shareTransaction)) {
			shareTransactions.add(shareTransaction);
			processShareHolding(shareTransaction);
		}
	}

	public void calculatePortfolioTotal() {
		totalValue = 0;
		for (ShareHolding sh : shareHoldings) {
			sh.calculateTotalValue();
			totalValue += sh.getTotalValue();
		}
	}

	private ShareHolding addShareHolding(Share share, LocalDateTime date) {

		for (ShareHolding holding : shareHoldings) {
			if (holding.getShare().equals(share)) {
				return holding;
			}
		}

		ShareHolding newShareHolding = new ShareHolding(0, 0, share, 0, date);
		shareHoldings.add(newShareHolding);

		return newShareHolding;
	}

	private void removeShareHolding(Share share) {
		ShareHolding toBeRemoved = null;

		for (ShareHolding sh : shareHoldings) {
			if (sh.getShare().equals(share)) {
				toBeRemoved = sh;
				break;
			}
		}

		if (toBeRemoved != null) {
			shareHoldings.remove(toBeRemoved);
		}
	}

	private void processShareHolding(ShareTransaction shareTransaction) {
		ShareHolding shareHolding = addShareHolding(shareTransaction.getShare(), shareTransaction.getTransactionDate());

		if (shareTransaction.isBuying()) {
			shareHolding.addToUnits(shareTransaction.getTransactionDate(), shareTransaction.getUnits());
			shareHolding.updateTotalCost(shareTransaction.getTotalPrice());
		} else {
			shareHolding.addToUnits(shareTransaction.getTransactionDate(), -1 * shareTransaction.getUnits());
			shareHolding.updateTotalCost(-1 * shareTransaction.getTotalPrice());
		}
	}

	public void editTransaction(int currentTransactionId, ShareTransaction newTransaction) {
		deleteTransaction(currentTransactionId);
		
		if(newTransaction != null) { // If replacing transaction
			addShareTransaction(newTransaction);
		}
	}
	
	public void deleteTransaction(int currentTransactionId) {
		ShareTransaction currentTransaction = getShareTransactionById(currentTransactionId);

		if (currentTransaction != null) {
			ShareHolding shareHolding = getShareHolding(currentTransaction.getShare());
			
			if (currentTransaction.isBuying()) {
				shareHolding.addToUnits(currentTransaction.getTransactionDate(), -1 * currentTransaction.getUnits());
				shareHolding.updateTotalCost( -1 * currentTransaction.getTotalPrice());
				Collection<Integer> unitsThroughTime = shareHolding.getUnitsThroughTime().values();
				boolean toBeDeleted = true;
				for (int currentUnits : unitsThroughTime) {
					if(currentUnits != 0) {
						toBeDeleted = false;
					}
				}
				if(toBeDeleted) {
					deleteShareHolding(shareHolding);
				}
			} else {
				shareHolding.addToUnits(currentTransaction.getTransactionDate(), currentTransaction.getUnits());
				shareHolding.updateTotalCost(currentTransaction.getTotalPrice());
			}
			
			shareTransactions.remove(currentTransaction);
		}
	}

	private void deleteShareHolding(ShareHolding shareHolding) {
		shareHoldings.remove(shareHolding);
		
	}

	public ShareHolding getShareHolding(String symbol) {
		for (ShareHolding sh : shareHoldings) {
			if (sh.getShare().getSymbol().equals(symbol)) {
				return sh;
			}
		}

		return null;
	}

}
