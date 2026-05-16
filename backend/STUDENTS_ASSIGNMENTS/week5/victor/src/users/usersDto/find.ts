import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class user{
    @IsString()
    @IsNotEmpty()
    firstname: string

    @IsString()
    @IsOptional()
    lastname: string
}