import { Injectable } from '@nestjs/common';
import { SignInProvider } from './providers/sign-in-provider';
import { SignInDto } from './signInDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly signInProvider: SignInProvider,
  ) {}

  public async signIn(
    signInDto: SignInDto,
  ) {
    return this.signInProvider.signIn(
      signInDto,
    );
  }
}