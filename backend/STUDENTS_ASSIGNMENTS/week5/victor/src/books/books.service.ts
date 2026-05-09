import { Injectable } from '@nestjs/common';
import { Book } from 'src/books/interfaces/book.interface';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id: 1,
      bookName: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
    {
      id: 2,
      bookName: 'Outlander',
      author: 'Diana Gabaldon',
    },
    {
      id: 3,
      bookName: 'The Notebook',
      author: 'Nicholas Sparks',
    },
  ];
  viewBooks(): { success: boolean; count: number; data: Book[] } {
    return {
      success: true,
      count: this.books.length,
      data: this.books,
    };
  }

  viewOneBook(bookId: number): Book | undefined {
    const selectedBook = this.books.find((book) => book.id === bookId);
    if (!selectedBook) {
      return undefined;
    }
    return selectedBook;
  }

  addNewBook(book: Partial<Book>): Book | undefined {
    const newBookId = this.books[this.books.length - 1].id + 1;
    if (!book.author || !book.bookName) return undefined;
    const newBook = {
      id: newBookId,
      bookName: book.bookName,
      author: book.author,
    };
    this.books.push(newBook);
    return newBook;
  }

  updateBook(bookId: number, book: Partial<Book>): Book | undefined {
    const bookToUpdate = this.books.find((book) => book.id === bookId);
    if (!bookToUpdate) {
      return undefined;
    }
    const updatedBook = { ...bookToUpdate, ...book };
    const updatedBookIndex = this.books.findIndex((book) => book.id === bookId);
    this.books[updatedBookIndex] = updatedBook;
    return updatedBook;
  }

  deleteBook(bookId: number): Book[] {
    const bookToDeleteIndex = this.books.findIndex(
      (book) => book.id === bookId,
    );

    const deletedBook = this.books.splice(bookToDeleteIndex, 1);

    return deletedBook;
  }
}
