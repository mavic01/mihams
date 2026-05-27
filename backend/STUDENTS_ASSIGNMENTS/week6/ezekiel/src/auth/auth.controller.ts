import { Body, Controller, Get,  Post, Request,  UseGuards,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from './signInDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  public async signIn(
    @Body() signInDto: SignInDto,
  ) {
    return this.authService.signIn(signInDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}