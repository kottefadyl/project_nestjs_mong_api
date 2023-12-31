import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singUp(signUpDto: SignUpDto): Promise<{
        token: string;
    }>;
    login(logindto: LoginDto): Promise<{
        token: string;
    }>;
}
