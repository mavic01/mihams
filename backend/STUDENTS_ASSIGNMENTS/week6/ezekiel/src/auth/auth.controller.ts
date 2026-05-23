import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './signInDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}
    @Post()
    public async signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto)
    }
}
