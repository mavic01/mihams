import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Book } from 'src/books/interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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

  viewOneBook(bookId: number): Book {
    const selectedBook = this.books.find((book) => book.id === bookId);

    if (!selectedBook) {
      throw new NotFoundException('Book not found');
    }

    return selectedBook;
  }

  addNewBook(book: CreateBookDto): Book {
    const existingBook = this.books.find(
      (existingBook) => existingBook.bookName === book.bookName,
    );
    if (existingBook) {
      throw new BadRequestException('Book already exists');
    }
    const newBookId = this.books[this.books.length - 1].id + 1;

    const newBook: Book = {
      id: newBookId,
      bookName: book.bookName,
      author: book.author,
    };

    this.books.push(newBook);

    return newBook;
  }

  updateBook(bookId: number, book: UpdateBookDto): Book {
    const bookToUpdate = this.books.find((book) => book.id === bookId);

    if (!bookToUpdate) {
      throw new NotFoundException('Book not found');
    }

    const updatedBook = {
      ...bookToUpdate,
      ...book,
    };

    const updatedBookIndex = this.books.findIndex((book) => book.id === bookId);

    this.books[updatedBookIndex] = updatedBook;

    return updatedBook;
  }

  deleteBook(bookId: number): Book[] {
    const bookToDeleteIndex = this.books.findIndex(
      (book) => book.id === bookId,
    );

    if (bookToDeleteIndex === -1) {
      throw new NotFoundException('Book not found');
    }

    return this.books.splice(bookToDeleteIndex, 1);
  }
}
