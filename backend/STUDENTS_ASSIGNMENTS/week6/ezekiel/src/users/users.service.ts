import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindAllUserProvider } from './providers/find-all-user.provider';
import { CreateUserProvider } from './providers/create-user.provider';
import { DeleteUserProvider } from './providers/delete-user.provider';
import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';
import { UpdateUserProvider } from './providers/update-user.provider';

@Injectable()
export class UsersService {
  constructor(
    private readonly findAllUsersProvider: FindAllUserProvider,

    private readonly createUserProvider: CreateUserProvider,

    private readonly updateUserProvider: UpdateUserProvider,

    private readonly deleteUserProvider: DeleteUserProvider,

    private readonly findOneByEmailProvider: FindOneByEmailProvider,
  ) {}

  // FIND ALL USERS
  public findAllUsers() {
    return this.findAllUsersProvider.findAllUsers();
  }

  // CREATE USER
  public createUser(createUserDto: CreateUserDto) {
    return this.createUserProvider.createUser(
      createUserDto,
    );
  }

  // UPDATE USER
  public updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserProvider.updateUser(
      id,
      updateUserDto,
    );
  }

  // DELETE USER
  public deleteUser(id: number) {
    return this.deleteUserProvider.deleteUser(id);
  }

  // FIND USER BY EMAIL
  public findByEmail(email: string) {
    return this.findOneByEmailProvider.findOneByEmail(
      email,
    );
  }
}