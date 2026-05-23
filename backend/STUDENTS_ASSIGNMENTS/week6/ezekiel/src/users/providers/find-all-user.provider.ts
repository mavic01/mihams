import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Users } from '../users.entity';

@Injectable()
export class FindAllUserProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  public findAllUsers() {
    return this.usersRepository.find({
      relations: ['books']
    });
  }
}