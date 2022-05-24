package io.portfol.manager.model.dto;

import java.util.List;

public class ShareHistoryRequest {
	List<String> symbols;
	String date;

	public List<String> getSymbols() {
		return symbols;
	}

	public void setSymbols(List<String> symbols) {
		this.symbols = symbols;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
}
