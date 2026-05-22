import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';

@Injectable()
export class FindAllUsersProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAll() {
    return await this.usersRepository.find({
      select: [
        'id',
        'firstname',
        'lastname',
        'email',
        'createdAt',
        'updatedAt',
      ],
    });
  }
}
