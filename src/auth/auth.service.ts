import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.model';
import { jwtConstants } from './auth.constant';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private readonly users: User[] = [];

  async generateToken(user: User): Promise<string> {
    const payload = { userId: user.userId };
    return this.jwtService.signAsync(payload);
  }

  async signup(user: User): Promise<{ message: string }> {
    this.users.push(user);
    return { message: 'user added' };
  }

  async login(user: User): Promise<{ token: string }> {
    const token = await this.generateToken(user);
    return { token };
  }
}
