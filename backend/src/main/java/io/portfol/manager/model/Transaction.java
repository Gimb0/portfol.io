package io.portfol.manager.model;

import java.time.LocalDateTime;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Transaction {

	@Id
	@GeneratedValue
	private int id;
	private LocalDateTime transactionDate;
	private double totalPrice;
	private boolean buying;

	public Transaction() {
	}

	public Transaction(double totalPrice, boolean buying, LocalDateTime date) {
		super();
		this.totalPrice = totalPrice;
		this.buying = buying;
		this.transactionDate = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(LocalDateTime transactionDate) {
		this.transactionDate = transactionDate;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public boolean isBuying() {
		return buying;
	}

	public void setBuying(boolean buying) {
		this.buying = buying;
	}

}
