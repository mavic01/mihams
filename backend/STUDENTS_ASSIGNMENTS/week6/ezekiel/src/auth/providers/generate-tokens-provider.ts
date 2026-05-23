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
      { sub: userId, firstname, lastname, ...payload },
      {
        secret: process.env.JWT_SECRET,
        audience: process.env.JWT_SECRET,
        issuer: process.env.JWT_ISSUER,
        expiresIn,
      },
    );
  }

  public async generateToken(user: Users) {

    const ttl = parseInt(process.env.TTL ?? "3000")

    const [accessToken] =  await Promise.all([
        this.signInToken(user.id, user.firstname, user.lastname, ttl, {user: user.email})

    ])

    return {accessToken, user}
  }
}
