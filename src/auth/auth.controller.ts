import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthCredentialsSchema,
  AuthCredentialsDtoType,
} from './dto/auth-credentials.dto';
import { CustomValidationPipe } from '../pipes/validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

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

  @Post('/signin')
  signIn(
    @Body(new CustomValidationPipe(AuthCredentialsSchema))
    authCredentialsDto: AuthCredentialsDtoType,
  ) {
    return this.authService.signIn(authCredentialsDto);
  }

  // Should be removed but leaving for testing 
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
