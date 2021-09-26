import { Controller, Get, Query } from '@nestjs/common';
import { setStatusRequestDto } from './dto/setstatus.request.dto';
import { voteRequestDto } from './dto/vote.request.dto';
import { PollService } from './poll.service';

@Controller('poll')
export class PollController {
    constructor(private readonly pollService: PollService) { }

    @Get("list")
    async list(): Promise<[string[], boolean][]> {
        return await this.pollService.getPollList();
    }

    @Get("make")
    async make(@Query('candidates') candidates: string[]): Promise<string> {
        return await this.pollService.makePoll(candidates);
    }

    @Get("vote")
    async vote(@Query() requestDto: voteRequestDto): Promise<string> {
        return await this.pollService.vote(requestDto);
    }

    @Get("setstatus")
    async setStatus(@Query() requestDto: setStatusRequestDto): Promise<string> {
        return await this.pollService.setStatus(requestDto);
    }

    @Get("result")
    async result(poll: number): Promise<[string[], number[]]> {
        return await this.pollService.getResult(poll);
    }
}
