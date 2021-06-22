package com.capg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.beans.Book;
import com.capg.repo.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public Book addBook(Book book) {
		return null;
	}

	@Override
	public Book getBook(String isbn) {
		
		return bookRepository.findBook(isbn);
	}

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book getBookByAuthorName(String author) {

		return bookRepository.findBookByAuthor(author);
	}

}
