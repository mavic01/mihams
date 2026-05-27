import {BadRequestException,  Injectable,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { HashingProvider } from 'src/auth/providers/hashing-provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,

    // hint: use fowardRef to take care of circular dependency
    private readonly hashingProvider: HashingProvider
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

    const hashedPassword = await this.hashingProvider.hashPassword(createUserDto.password)

    // CREATE USER
    const newUser =
      this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword
      });

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