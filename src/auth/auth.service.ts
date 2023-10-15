import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'This is login method' };
  }

  signup() {
    return { msg: 'This is Signup Method' };
  }
}
