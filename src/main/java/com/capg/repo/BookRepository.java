package com.capg.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.capg.beans.Book;

@Repository
public class BookRepository {

	private static List<Book> books = new ArrayList<>();

	public BookRepository() {
		if (books.size() == 0) {
			books.add(new Book("ISBN-12234445", "The Complete Reference-Java", "Herbert Schild"));
			books.add(new Book("ISBN-12234446", "The Complete Reference-HTML", "Tim"));
			books.add(new Book("ISBN-12234447", "The Complete Reference-C++", "Herbert Schild"));
			books.add(new Book("ISBN-12234448", "The Complete Reference-Python", "Herbert Schild"));
		}

	}

	public Book findBook(String isbn) {
		System.out.println("BookRepository.findBook()" + books.size());
		Book b = null;
		for (Book book : books) {

			if (isbn.equals(book.getIsbn())) {
				b = book;
				break;
			}
		}

		return b;
	}

	public Book findBookByAuthor(String author) {

		Book b = null;
		for (Book book : books) {

			if (author.equals(book.getAuthor())) {
				b = book;
				break;
			}
		}

		return b;

	}

}
