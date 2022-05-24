package io.portfol.manager.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ShareTransaction extends Transaction {

	private int units;
	private double avgPrice;
	
	@ManyToOne
	@JoinColumn(name = "share_id")
	private Share share;

	public ShareTransaction() {
	}

	public ShareTransaction( double totalPrice, boolean buying, int units, Share share, LocalDateTime date) {
		super(totalPrice, buying, date);
		this.units = units;
		this.avgPrice = totalPrice / units;
		this.share = share;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	public double getAvgPrice() {
		return avgPrice;
	}

	public void setAvgPrice(double avgPrice) {
		this.avgPrice = avgPrice;
	}

	public Share getShare() {
		return share;
	}

	public void setShare(Share share) {
		this.share = share;
	}

}
