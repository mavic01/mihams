import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookName: string;

    @Column()
    author: string;
}