import { Controller, Get, Query, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get("signin")
    signIn(@Query("id") id: String): Boolean {
        return this.authService.signIn(id);
    }
}
