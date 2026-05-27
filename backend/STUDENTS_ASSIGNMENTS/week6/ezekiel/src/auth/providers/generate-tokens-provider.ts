import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/users.entity';

@Injectable()
export class GenerateTokensProvider {
  constructor(private readonly jwtService: JwtService) {}

  public async signInToken<T>(
    userId: number,
    firstname: string,
    lastname: string,
    expiresIn: number,
    payload: T,
  ) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        firstname,
        lastname,
        ...payload,
      },
      {
        secret: process.env.JWT_SECRET || 'supersecretkey',
        issuer: process.env.JWT_ISSUER || 'getchange',
        expiresIn: `${expiresIn}s`,
      },
    );
  }
  public async generateToken(user: Users) {
    const ttl = Number(process.env.TTL) || 3000;
    const accessToken = await this.signInToken(
      user.id,
      user.firstname,
      user.lastname,
      ttl,
      {
        user: user.email,
      },
    );
    return accessToken;
  }
}