import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { FindAllUserProvider } from './providers/find-all-user.provider';
import { CreateUserProvider } from './providers/create-user.provider';
import { UpdateUserProvider } from './providers/update-user.provider';
import { DeleteUserProvider } from './providers/delete-user.provider';
import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],

  controllers: [UsersController],

  providers: [
    UsersService,

    FindAllUserProvider,
    CreateUserProvider,
    UpdateUserProvider,
    DeleteUserProvider,
    FindOneByEmailProvider,
  ],

  exports: [UsersService],
})
export class UsersModule {}