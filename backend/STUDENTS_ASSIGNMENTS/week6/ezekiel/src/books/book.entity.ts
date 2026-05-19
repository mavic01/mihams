import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Users } from '../users/users.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  bookName!: string;

  @Column()
  author!: string;

  @ManyToOne(
    () => Users,
    (user) => user.books,
    { onDelete: 'CASCADE' },
  )
  user!: Users;
}