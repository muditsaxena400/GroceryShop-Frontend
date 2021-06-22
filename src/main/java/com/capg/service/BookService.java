package com.capg.service;

import java.util.List;

import com.capg.beans.Book;

public interface BookService {
	
	public Book addBook(Book book);
	
	public Book getBook(String isbn);
	
	public List<Book> getAllBooks();

	public Book getBookByAuthorName(String author);

}
