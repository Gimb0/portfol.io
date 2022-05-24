package io.portfol.manager.model.dto;

public class TransactionRequest {

	private double totalPrice;
	private String date;
	private String share;
	private int units;
	private boolean buying;

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getShare() {
		return share;
	}

	public void setShare(String share) {
		this.share = share;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	public boolean getBuying() {
		return buying;
	}

	public void setBuying(boolean buying) {
		this.buying = buying;
	}

}
