package com.capg.controller;

public class BookNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private String message;

	public BookNotFoundException(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "BookNotFoundException [message=" + message + "]";
	}

}
