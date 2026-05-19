import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../users.entity';

@Injectable()
export class DeleteUserProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  public async deleteUser(id: number) {
    // CHECK USER
    const user =
      await this.usersRepository.findOne({
        where: { id },
      });

    // THROW ERROR
    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    // DELETE USER
    await this.usersRepository.delete(id);

    
    return {
      message:
        'User deleted successfully',
    };
  }
}