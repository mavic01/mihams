import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Users } from 'src/users/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async viewBooks(): Promise<{
    success: boolean;
    count: number;
    data: Book[];
  }> {
    const books = await this.bookRepository.find({
      relations: ['user'],
      select: {
        id: true,
        bookName: true,
        author: true,
        user: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
    });

    return {
      success: true,
      count: books.length,
      data: books,
    };
  }

  async viewOneBook(bookId: number): Promise<Book> {
    const selectedBook = await this.bookRepository.findOne({
      where: { id: bookId },
      relations: ['user'],
      select: {
        id: true,
        bookName: true,
        author: true,
        user: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
    });

    if (!selectedBook) {
      throw new NotFoundException('Book not found');
    }

    return selectedBook;
  }

  async addNewBook(book: CreateBookDto): Promise<Book> {
    const user = await this.userRepository.findOne({
      where: { id: book.userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${book.userId} not found`);
    }

    const existingBook = await this.bookRepository.findOneBy({
      bookName: book.bookName,
      author: book.author,
    });

    if (existingBook) {
      throw new BadRequestException('Book already exists');
    }

    const newBook = this.bookRepository.create({
      bookName: book.bookName,
      author: book.author,
      user: user,
    });

    return await this.bookRepository.save(newBook);
  }

  async updateBook(
    bookId: number,
    updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    const bookToUpdate = await this.bookRepository.findOne({
      where: { id: bookId },
    });

    if (!bookToUpdate) {
      throw new NotFoundException('Book not found');
    }

    await this.bookRepository.update(bookId, updateBookDto); //(record to update, field to update)

    const updatedBook = await this.bookRepository.findOne({
      where: { id: bookId },
      relations: ['user'],
      select: {
        id: true,
        bookName: true,
        author: true,
        user: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
    });

    return updatedBook!;
  }

  async deleteBook(bookId: number): Promise<Book> {
    const bookToDelete = await this.bookRepository.findOneBy({ id: bookId });

    if (!bookToDelete) {
      throw new NotFoundException('Book not found');
    }

    await this.bookRepository.delete({ id: bookId });
    return bookToDelete;
  }
}
