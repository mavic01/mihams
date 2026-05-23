import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptProvider } from './providers/bcrypt-provider';
import { HashingProvider } from './providers/hashing-provider';
import { GenerateTokensProvider } from './providers/generate-tokens-provider';
import { SignInProvider } from './providers/sign-in-provider';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [JwtModule, forwardRef(() => UsersModule)],
  controllers: [AuthController],
  providers: [
    AuthService,
    BcryptProvider,
    {
      provide: HashingProvider, //v using the abstract class
      useClass: BcryptProvider, // binding with the real implementation
    },
    GenerateTokensProvider,
    SignInProvider,
  ],
  exports: [AuthService, HashingProvider],
})
export class AuthModule {}
