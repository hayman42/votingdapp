import { Controller, Get, Query } from '@nestjs/common';
import { voteRequestDto } from 'src/poll/dto/vote.request.dto';
import { User } from 'src/schemas/user.schema';
import { infoResponseDto } from './dto/user.info.response.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get("info")
    async info(@Query("name") name: string): Promise<infoResponseDto> {
        return await this.userService.getInfo(name);
    }

    @Get("vote")
    async vote(@Query() requestDto: voteRequestDto): Promise<infoResponseDto> {
        return await this.userService.addVoteInfo(requestDto);
    }
}
