import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('signup')
  signup() {
    return this.authservice.signup();
  }
  @Post('signin')
  signin() {
    return this.authservice.signin();
  }
}
