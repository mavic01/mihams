import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'libraryApi',
      autoLoadEntities: true,
      // entities: [Book],
      synchronize: true,
    }),BooksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, Users],
})
export class AppModule {}
