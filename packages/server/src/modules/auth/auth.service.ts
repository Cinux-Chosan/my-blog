import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) { }
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ username, password });
    if (user) {
      const { password, id, username, ...result } = user;
      return { id, username };
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
