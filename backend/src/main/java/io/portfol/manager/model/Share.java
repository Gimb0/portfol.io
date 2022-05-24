package io.portfol.manager.model;

import javax.persistence.Entity;

@Entity
public class Share extends Asset {

	private String symbol;
	private String stockExchange;
	private String company;

	public Share() {}

	public Share(String name, double value, String symbol, String company) {
		super(name, value);
		this.symbol = symbol;
		this.company = company;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Share [symbol=" + symbol + ", stockExchange=" + stockExchange + ", company=" + company + ", getValue()="
				+ getValue() + "]";
	}


}
