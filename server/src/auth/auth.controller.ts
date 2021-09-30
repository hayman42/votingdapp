import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerRequestDto } from './dto/register.request.dto';
import { signInRequestDto } from './dto/signin.request.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get("signin")
    async signIn(@Query() requestDto: signInRequestDto): Promise<boolean> {
        return await this.authService.signIn(requestDto);
    }

    @Get("register")
    async register(@Query() requestDto: registerRequestDto): Promise<boolean> {
        return await this.authService.register(requestDto);
    }

    @Get("checkname")
    async checkName(@Query("name") name: string): Promise<boolean> {
        return await this.authService.checkName(name);
    }

    @Get("isdeployer")
    isDeployer(@Query("address") address: string): boolean {
        return this.authService.isDeployer(address);
    }
}
