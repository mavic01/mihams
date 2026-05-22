import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  bookName: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
