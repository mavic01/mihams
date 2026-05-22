import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';
import { FindAllUsersProvider } from './providers/find-all-users.provider';
import { CreateUsersProvider } from './providers/create-users.provider';
import { UpdateUsersProvider } from './providers/update-users.provider';
import { DeleteUsersProvider } from './providers/delete-users.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    FindOneByEmailProvider,
    FindAllUsersProvider,
    CreateUsersProvider,
    UpdateUsersProvider,
    DeleteUsersProvider,
  ],
  exports: [UsersService],
})
export class UsersModule {}
