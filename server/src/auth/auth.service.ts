import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signIn(id: String): Boolean {
        console.log(id);
        return id == "admin";
    }
}
