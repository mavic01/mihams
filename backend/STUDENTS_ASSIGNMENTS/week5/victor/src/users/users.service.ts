import { Injectable } from '@nestjs/common';
import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';

@Injectable()
export class UsersService {
    constructor(
        private readonly findOneByEmail: FindOneByEmailProvider
    ) {}

    public findByEmail(email: string) {
        return this.findOneByEmail.findOneByemail(email)
    }
}
