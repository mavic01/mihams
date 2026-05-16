import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FindOneByEmailProvider]
})
export class UsersModule {}
