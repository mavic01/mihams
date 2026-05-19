import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) {}

  async viewBooks(): Promise<{ success: boolean; count: number; data: Book[] }> {
    let books = await this.bookRepository.find()
    
    return {
      success: true,
      count: books.length,
      data: books,
    };
  }

  async viewOneBook(bookId: number): Promise<Book> {
    const selectedBook = await this.bookRepository.findOneBy({ id: bookId });

    if (!selectedBook) {
      throw new NotFoundException('Book not found');
    }

    return selectedBook;
  }

  async addNewBook(book: CreateBookDto): Promise<Book> {
    const existingBook = await this.bookRepository.findOneBy({author: book.author});
    if (existingBook) {
      throw new BadRequestException('Book already exists');
    }
    let newBook = this.bookRepository.create({...book})

    newBook = await this.bookRepository.save(newBook)

    return newBook;
  }

  async updateBook(bookId: number, book: UpdateBookDto): Promise<Book> {
    const bookToUpdate = await this.bookRepository.findOneBy({id: bookId});

    if (!bookToUpdate) {
      throw new NotFoundException('Book not found');
    }

    const updatedBook = {
      ...bookToUpdate,
      ...book,
    };

    return updatedBook;
  }

  async deleteBook(bookId: number): Promise<Book> {
    const bookToDelete = await this.bookRepository.findOneBy({id: bookId})

    if (!bookToDelete) {
      throw new NotFoundException('Book not found');
    }

    await this.bookRepository.delete({id: bookId})
    return bookToDelete;
  }
}
