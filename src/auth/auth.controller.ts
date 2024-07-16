import { Post, Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.model';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User): Promise<{ token: string }> {
    return this.authService.login(user);
  }
  @Post('signup')
  async signup(@Body() user: User): Promise<{ message: string }> {
    return this.authService.signup(user);
  }
}
