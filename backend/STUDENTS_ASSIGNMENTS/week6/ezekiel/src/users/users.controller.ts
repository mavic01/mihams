import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  // GET ALL USERS
  @Get()
  public findAllUsers() {
    return this.usersService.findAllUsers();
  }

  // CREATE USER
  @Post()
  public createUser(
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  // UPDATE USER
  @Patch(':id')
  public updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(
      id,
      updateUserDto,
    );
  }

  // DELETE USER
  @Delete(':id')
  public deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usersService.deleteUser(id);
  }
}