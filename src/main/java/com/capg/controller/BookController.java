package com.capg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.beans.Book;
import com.capg.service.BookService;

@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	private BookService bookService;

	@RequestMapping(path = "/book-details/{isbn}", produces = "application/json")
	public ResponseEntity<Book> getBookInfo(@PathVariable("isbn") String isbn) {

		Book book = bookService.getBook(isbn);

		if (null == book) {
			throw new BookNotFoundException("Book not available for " + isbn);
		}

		return new ResponseEntity<Book>(book, HttpStatus.OK);

	}

	@RequestMapping(path = "/book-info/{author}", produces = "application/json")
	public ResponseEntity<Book> getBookByAuthor(@PathVariable("author") String author) {

		Book book = bookService.getBookByAuthorName(author);

		if (null == book) {
			throw new BookNotFoundByAuthorException("Book not available with " + author + " name");
		}

		return new ResponseEntity<Book>(book, HttpStatus.OK);

	}

}
