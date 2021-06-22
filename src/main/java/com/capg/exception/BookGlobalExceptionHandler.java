package com.capg.exception;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.capg.controller.BookNotFoundByAuthorException;
import com.capg.controller.BookNotFoundException;

@RestController
@ControllerAdvice
public class BookGlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(BookNotFoundException.class)
	public ResponseEntity<Object> handleBookNotFoundException(BookNotFoundException ex, WebRequest request)
			throws Exception {

		BookExceptionResponse resp = new BookExceptionResponse(new Date(System.currentTimeMillis()), ex.toString(),
				request.getContextPath(), HttpStatus.NOT_FOUND);

		return new ResponseEntity<>(resp, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(BookNotFoundByAuthorException.class)
	public ResponseEntity<Object> handleBookNotFoundByAuthorException(BookNotFoundByAuthorException ex,
			HttpServletRequest request) throws Exception {

		BookExceptionResponse resp = new BookExceptionResponse(new Date(System.currentTimeMillis()), ex.getMessage(),
				request.getRequestURI(), HttpStatus.NOT_FOUND);

		return new ResponseEntity<>(resp, HttpStatus.NOT_FOUND);

	}

}
