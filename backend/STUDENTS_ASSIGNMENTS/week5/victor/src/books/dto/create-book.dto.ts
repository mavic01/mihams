import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  bookName!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;
}
