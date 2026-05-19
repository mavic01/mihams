import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  bookName!: string;

  @IsNotEmpty()
  @IsString()
  author!: string;

  @IsNumber()
  userId!: number;
}