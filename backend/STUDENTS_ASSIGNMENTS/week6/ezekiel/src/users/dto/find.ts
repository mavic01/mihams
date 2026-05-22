import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FindUserDto {
    @IsString()
    @IsNotEmpty()
    firstname!: string

    @IsString()
    @IsOptional()
    lastname!: string
}