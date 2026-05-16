import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';

@Injectable()
export class FindOneByEmailProvider {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ) {}
    public async findOneByemail(email: string) {

    }
}
