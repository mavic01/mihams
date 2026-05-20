import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';

@Injectable()
export class FindOneByEmailProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email },
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
