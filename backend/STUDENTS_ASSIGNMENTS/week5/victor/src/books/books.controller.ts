import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from 'src/books/interfaces/book.interface';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): { success: boolean; count: number; data: Book[] } {
    return this.booksService.viewBooks();
  }

  @Get(':id')
  getOneBook(@Param('id') id: string): Book | undefined {
    return this.booksService.viewOneBook(+id);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    // const newBookdata = book;
    return this.booksService.addNewBook(book);
  }

  @Patch(':id')
  updateBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    return this.booksService.updateBook(+id, book);
  }

  @Delete(':id')
  removeBook(@Param('id') id: string): Book[] {
    return this.booksService.deleteBook(+id);
  }
}
