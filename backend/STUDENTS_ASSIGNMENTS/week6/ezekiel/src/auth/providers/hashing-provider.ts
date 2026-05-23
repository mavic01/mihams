import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingProvider {
    // hashing the password
    abstract hashPassword(password: string | Buffer): Promise<string>
    abstract comparePassword(password: string, encrptedPassword: string): Promise<boolean>
}
