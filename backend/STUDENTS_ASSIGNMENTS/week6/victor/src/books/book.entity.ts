import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @Column()
  author: string;

  @ManyToOne(() => Users, (user) => user.books, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: Users;
}
