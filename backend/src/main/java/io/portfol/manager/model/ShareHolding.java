package io.portfol.manager.model;

import java.time.LocalDateTime;
import java.util.NavigableMap;
import java.util.SortedMap;
import java.util.TreeMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ShareHolding extends Holding {

	@ManyToOne
	@JoinColumn(name = "share_id")
	private Share share;
	
	@Column(length = 1337)
	private TreeMap<LocalDateTime, Integer> unitsThroughTime;

	public ShareHolding() {
	}

	public ShareHolding(double totalCost, double totalValue, Share share, int totalUnits, LocalDateTime date) {
		super(totalCost, totalValue);
		this.share = share;
		unitsThroughTime = new TreeMap<>();
		unitsThroughTime.put(date, totalUnits);
	}

	public Share getShare() {
		return share;
	}

	public void setShare(Share share) {
		this.share = share;
	}

	public int getTotalUnits() {
		return unitsThroughTime.lastEntry().getValue();
	}

	public TreeMap<LocalDateTime, Integer> getUnitsThroughTime() {
		return unitsThroughTime;
	}

	public void setUnitsThroughTime(TreeMap<LocalDateTime, Integer> unitsThroughTime) {
		this.unitsThroughTime = unitsThroughTime;
	}

	public void addToUnits(LocalDateTime date, int newUnits) {
		if(date.isAfter(unitsThroughTime.lastKey())) {
			unitsThroughTime.put(date, getTotalUnits()+newUnits);
		} else if(unitsThroughTime.containsKey(date)) {
			NavigableMap<LocalDateTime, Integer> toBeUpdated = unitsThroughTime.tailMap(date, true);
			toBeUpdated.forEach((key, value) -> {
				unitsThroughTime.put(key, value+newUnits);
			});
		} else {
			unitsThroughTime.put(date, newUnits);
			SortedMap<LocalDateTime, Integer> subMap = unitsThroughTime.headMap(date);
			if(!subMap.isEmpty())
				unitsThroughTime.put(date, subMap.get(subMap.lastKey())+newUnits);
			
			NavigableMap<LocalDateTime, Integer> toBeUpdated = unitsThroughTime.tailMap(date, false);
			toBeUpdated.forEach((key, value) -> {
				unitsThroughTime.put(key, value + newUnits);
			});
		}
	}
	
	public LocalDateTime getEarliestHolding() {
		return unitsThroughTime.firstKey();
	}

	@Override
	public void calculateTotalValue() {		
		double shareValue = share.getValue();
		
		super.setTotalValue(shareValue * getTotalUnits());
	}

}
