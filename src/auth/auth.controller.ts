import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthCredentialsSchema,
  AuthCredentialsDtoType,
} from './dto/auth-credentials.dto';
import { CustomValidationPipe } from '../pipes/validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(new CustomValidationPipe(AuthCredentialsSchema))
    authCredentialsDto: AuthCredentialsDtoType,
  ) {
    return this.authService.signUp(authCredentialsDto);
  }
}
