package io.portfol.manager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestExceptionHandler {

	@ExceptionHandler(UnsuccessfulLoginException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	public ExceptionDto handleException(UnsuccessfulLoginException e) {
		// TODO: log message
		return new ExceptionDto(e.getMessage());
	}
	
	
	
}
