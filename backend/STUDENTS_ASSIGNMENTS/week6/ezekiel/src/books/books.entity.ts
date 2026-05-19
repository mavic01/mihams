import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Users } from '../users/users.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  bookName!: string;

  @Column()
  author!: string;

  @ManyToOne(
    () => Users,
    (user) => user.books,
  )
  user!: Users;
}