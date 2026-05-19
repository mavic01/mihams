import {BadRequestException,Injectable,NotFoundException,} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../users/users.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async viewBooks(): Promise<{
    success: boolean;
    count: number;
    data: Book[];
  }> {
    const books =
      await this.bookRepository.find({
        relations: ['user'],
      });

    return {
      success: true,
      count: books.length,
      data: books,
    };
  }

  async viewOneBook(
    bookId: number,
  ): Promise<Book> {
    const selectedBook =
      await this.bookRepository.findOne({
        where: { id: bookId },

        relations: ['user'],
      });

    if (!selectedBook) {
      throw new NotFoundException(
        'Book not found',
      );
    }

    return selectedBook;
  }

  async addNewBook(
    book: CreateBookDto,
  ): Promise<any> {
    // CHECK IF USER EXISTS
    const user =
      await this.usersRepository.findOne({
        where: {
          id: book.userId,
        },
      });

    // IF USER DOES NOT EXIST
    if (!user) {
      throw new BadRequestException(
        'User does not exist',
      );
    }

    // CHECK IF BOOK EXISTS
    const existingBook =
      await this.bookRepository.findOneBy({
        author: book.author,
      });

    if (existingBook) {
      throw new BadRequestException(
        'Book already exists',
      );
    }

    // CREATE BOOK
    let newBook =
      this.bookRepository.create({
        bookName: book.bookName,

        author: book.author,

        user,
      });

    // SAVE BOOK
    newBook =
      await this.bookRepository.save(
        newBook,
      );

    return {
      message:
        'Book created successfully',

      data: newBook,
    };
  }

  async updateBook(
    bookId: number,
    book: UpdateBookDto,
  ): Promise<any> {
    const bookToUpdate =
      await this.bookRepository.findOneBy({
        id: bookId,
      });

    if (!bookToUpdate) {
      throw new NotFoundException(
        'Book not found',
      );
    }

    const updatedBook = {
      ...bookToUpdate,
      ...book,
    };

    await this.bookRepository.save(
      updatedBook,
    );

    return {
      message:
        'Book updated successfully',

      data: updatedBook,
    };
  }

  async deleteBook(
    bookId: number,
  ): Promise<any> {
    const bookToDelete =
      await this.bookRepository.findOneBy({
        id: bookId,
      });

    if (!bookToDelete) {
      throw new NotFoundException(
        'Book not found',
      );
    }

    await this.bookRepository.delete({
      id: bookId,
    });

    return {
      message:
        'Book deleted successfully',
    };
  }
}