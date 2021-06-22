package com.capg.controller;

public class BookNotFoundByAuthorException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private String message;

	public BookNotFoundByAuthorException(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "[message=" + message + "]";
	}

	@Override
	public String getMessage() {
		return this.message;
	}

}
