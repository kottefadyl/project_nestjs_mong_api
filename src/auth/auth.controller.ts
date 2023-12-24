import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { stdin } from 'process';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){}

    @Post('/signup')
    singUp(@Body() signUpDto: SignUpDto): Promise<{token: string}>{
        return this.authService.signUp(signUpDto)
    }

    @Post('/login')
    login(@Body() logindto: LoginDto): Promise<{token: string}>{
        return this.authService.login(logindto)
    }
}
