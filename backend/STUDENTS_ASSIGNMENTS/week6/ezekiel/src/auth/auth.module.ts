import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { BcryptProvider } from './providers/bcrypt-provider';
import { HashingProvider } from './providers/hashing-provider';
import { GenerateTokensProvider } from './providers/generate-tokens-provider';
import { SignInProvider } from './providers/sign-in-provider';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret:
        process.env.JWT_SECRET ||
        'supersecretkey',

      signOptions: {
        expiresIn:
          parseInt(process.env.TTL || '3000', 10),
      },
    }),

    forwardRef(() => UsersModule),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    BcryptProvider,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    GenerateTokensProvider,
    SignInProvider,
    JwtStrategy,
  ],
  exports: [AuthService, HashingProvider],
})
export class AuthModule {}