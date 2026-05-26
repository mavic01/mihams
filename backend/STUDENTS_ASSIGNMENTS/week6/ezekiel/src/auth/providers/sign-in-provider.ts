import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { UsersService } from 'src/users/users.service';

import { HashingProvider } from './hashing-provider';

import { SignInDto } from '../signInDto';

import { GenerateTokensProvider } from './generate-tokens-provider';

@Injectable()
export class SignInProvider {
  constructor(
    private readonly userService: UsersService,
    private readonly hashingProvider: HashingProvider,
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    // Check if user exists
    const user = await this.userService.findByEmail(
      signInDto.email,
    );

    if (!user) {
      throw new UnauthorizedException(
        'Email or password is incorrect',
      );
    }

    // Compare passwords
    const isComparePassword =
      await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );

    if (!isComparePassword) {
      throw new UnauthorizedException(
        'Email or password is incorrect',
      );
    }

    // Generate tokens
    return await this.generateTokensProvider.generateToken(
      user,
    );
  }
}