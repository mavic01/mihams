import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../users.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  public async createUser(
    createUserDto: CreateUserDto,
  ) {
    // CHECK IF EMAIL EXISTS
    const existingUser =
      await this.usersRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });

    if (existingUser) {
      throw new BadRequestException(
        'Email already exists',
      );
    }

    // CREATE USER
    const newUser =
      this.usersRepository.create(
        createUserDto,
      );

    // SAVE USER
    await this.usersRepository.save(
      newUser,
    );

    // CUSTOM RESPONSE
    return {
      message:
        'User created successfully',
    };
  }
}