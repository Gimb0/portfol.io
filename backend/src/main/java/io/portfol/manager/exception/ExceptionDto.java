package io.portfol.manager.exception;

public class ExceptionDto {

	private String message;

	public ExceptionDto() {
		super();
	}

	public ExceptionDto(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
