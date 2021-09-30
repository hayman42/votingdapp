import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { registerRequestDto } from './dto/register.request.dto';
import { signInRequestDto } from './dto/signin.request.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    async signIn(requestDto: signInRequestDto): Promise<boolean> {
        const { name, password } = requestDto;
        const user = await this.userModel.findOne({ name: name }).exec();
        return user.password == password;
    }

    async register(requestDto: registerRequestDto): Promise<boolean> {
        const { name, address, password } = requestDto;
        const data = new this.userModel({ name: name, address: address, password: password });
        await data.save()
        return true;
    }

    async checkName(name: string): Promise<boolean> {
        const result = await this.userModel.findOne({ name: name }).exec();
        return result != null;
    }

    isDeployer(address: string): boolean {
        return address === process.env.DEPLOYER_ADDRESS;
    }
}
