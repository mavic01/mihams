import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashingProvider } from './hashing-provider';

@Injectable()
export class BcryptProvider
  implements HashingProvider
{
  public async hashPassword(
    password: string | Buffer,
  ): Promise<string> {
    const saltOrRounds = 10;

    const hash = await bcrypt.hash(
      password,
      saltOrRounds,
    );

    return hash;
  }

  public async comparePassword(
    password: string,
    encryptedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(
      password,
      encryptedPassword,
    );
  }
}