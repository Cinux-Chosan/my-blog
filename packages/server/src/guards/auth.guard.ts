import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject('UserService') private userService: UserService) { }

  async canActivate(
    context: ExecutionContext,
  ) {
    const httpContext = context.switchToHttp();
    const req = httpContext.getRequest();
    const res = httpContext.getResponse();
    const headers = req.headers;
    const { authorization } = headers

    if (authorization) {
      const [, base64Atuh] = authorization.split(' ');
      const strAuth = new Buffer(base64Atuh, 'base64').toString();
      const [username, password] = strAuth.split(':');
      const user = await this.userService.findOne({ username, password })
      return !!user
    } else {
      res.set('WWW-Authenticate', 'Basic');
      throw new UnauthorizedException();
    }
  }
}
