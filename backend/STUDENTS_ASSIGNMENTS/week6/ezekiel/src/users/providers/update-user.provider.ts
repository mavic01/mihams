import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../users.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  public async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
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

    // UPDATE USER
    await this.usersRepository.update(
      id,
      updateUserDto,
    );

    // CUSTOM RESPONSE
    return {
      message:
        'User updated successfully',
    };
  }
}