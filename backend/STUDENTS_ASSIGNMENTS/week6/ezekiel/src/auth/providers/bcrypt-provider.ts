import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing-provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements HashingProvider {
  public async hashPassword(password: string | Buffer): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return hash;
  }

  public async comparePassword(password: string, encrptedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, encrptedPassword);
    return isMatch;
  }
}
