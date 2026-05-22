import { Injectable } from '@nestjs/common';
import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';
import { FindAllUsersProvider } from './providers/find-all-users.provider';
import { CreateUsersProvider } from './providers/create-users.provider';
import { UpdateUsersProvider } from './providers/update-users.provider';
import { DeleteUsersProvider } from './providers/delete-users.provider';
import { CreateUserDto } from './usersDto/create-user.dto';
import { UpdateUserDto } from './usersDto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly findOneByEmail: FindOneByEmailProvider,
    private readonly findAllUsers: FindAllUsersProvider,
    private readonly createUsers: CreateUsersProvider,
    private readonly updateUsers: UpdateUsersProvider,
    private readonly deleteUsers: DeleteUsersProvider,
  ) {}

  findAll() {
    return this.findAllUsers.findAll();
  }

  findByEmail(email: string) {
    return this.findOneByEmail.findOneByEmail(email);
  }

  create(createUserDto: CreateUserDto) {
    return this.createUsers.create(createUserDto);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.updateUsers.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.deleteUsers.delete(id);
  }
}
