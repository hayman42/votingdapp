import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerRequestDto } from './dto/register.request.dto';
import { signInRequestDto } from './dto/signin.request.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get("signin")
    async signIn(@Query() requestDto: signInRequestDto): Promise<Boolean> {
        return await this.authService.signIn(requestDto);
    }

    @Get("register")
    async register(@Query() requestDto: registerRequestDto): Promise<Boolean> {
        return await this.authService.register(requestDto);
    }

    @Get("checkname")
    async checkName(@Query("name") name: string): Promise<Boolean> {
        return await this.authService.checkName(name);
    }
}
