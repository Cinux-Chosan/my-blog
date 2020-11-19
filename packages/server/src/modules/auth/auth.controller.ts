import { Controller, UseGuards, Get, Post, Request, Response } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    const result = await this.authService.login(req.user)
    res.cookie('jwt', result.access_token)
    res.json(result)
  }
}
