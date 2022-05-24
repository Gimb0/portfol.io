package io.portfol.manager.model;

import java.util.Calendar;

import javax.persistence.Entity;

@Entity
public class ShareHistory extends Asset {

	private String symbol;
	private Calendar date;
	
	private Double openPrice;
	private Double highPrice;
	private Double lowPrice;
	private Double closePrice;

	public ShareHistory() {}

	public ShareHistory(String symbol, Calendar date, Double openPrice, Double highPrice, Double lowPrice,
			Double closePrice) {
		super();
		this.symbol = symbol;
		this.date = date;
		this.openPrice = openPrice;
		this.highPrice = highPrice;
		this.lowPrice = lowPrice;
		this.closePrice = closePrice;
	}



	public Calendar getDate() {
		return date;
	}

	public void setDate(Calendar date) {
		this.date = date;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public Double getOpenPrice() {
		return openPrice;
	}

	public void setOpenPrice(Double openPrice) {
		this.openPrice = openPrice;
	}

	public Double getHighPrice() {
		return highPrice;
	}

	public void setHighPrice(Double highPrice) {
		this.highPrice = highPrice;
	}

	public Double getLowPrice() {
		return lowPrice;
	}

	public void setLowPrice(Double lowPrice) {
		this.lowPrice = lowPrice;
	}

	public Double getClosePrice() {
		return closePrice;
	}

	public void setClosePrice(Double closePrice) {
		this.closePrice = closePrice;
	}

	@Override
	public String toString() {
		return "ShareHistory [symbol=" + symbol + ", date=" + date + ", openPrice=" + openPrice + ", highPrice="
				+ highPrice + ", lowPrice=" + lowPrice + ", closePrice=" + closePrice + "]";
	}

}
