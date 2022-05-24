package io.portfol.manager.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Holding {

	@Id
	@GeneratedValue
	private int id;
	private double totalCost;
	private double totalValue;
	
	public abstract void calculateTotalValue();
	
	public Holding() {}
	
	public Holding(double totalCost, double totalValue) {
		super();
		this.totalCost = totalCost;
		this.totalValue = totalValue;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
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
	
	public void updateTotalCost(double amount) {
		totalCost += amount;
	}
}
