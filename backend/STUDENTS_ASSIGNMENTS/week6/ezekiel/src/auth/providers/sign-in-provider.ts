import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { HashingProvider } from './hashing-provider';
import { SignInDto } from '../signInDto';
import { GenerateTokensProvider } from './generate-tokens-provider';

@Injectable()
export class SignInProvider {
  constructor(
    private readonly userService: UsersService,
    private readonly hashingProvider: HashingProvider,
    private readonly generateTokensProvider: GenerateTokensProvider
  ) {}

  public signIn(signInDto: SignInDto) {
    // Check if user exit
    const user = this.userService.findByEmail(signInDto.email);

    if (!user) {
      throw new UnauthorizedException('email or password is incorrect');
    }

    // Compare the user password
    let isComparePassword = false;

    try {
      isComparePassword = this.hashingProvider.comparePassword(signInDto.password, user.);
    } catch (error) {
      throw new UnauthorizedException();
    }

    // generate tokens

    return await this.generateTokensProvider.generateToken(user)
  }
}
