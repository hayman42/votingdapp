import { Controller, Get, Query } from '@nestjs/common';
import { makePollRequestDto } from './dto/makepoll.request.dto';
import { setStatusRequestDto } from './dto/setstatus.request.dto';
import { voteRequestDto } from './dto/vote.request.dto';
import { PollService } from './poll.service';

@Controller('poll')
export class PollController {
    constructor(private readonly pollService: PollService) { }

    @Get("list")
    async list(): Promise<[string[], string, boolean][]> {
        return await this.pollService.getPollList();
    }

    @Get("make")
    async make(@Query() requestDto: makePollRequestDto): Promise<string> {
        return await this.pollService.makePoll(requestDto);
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
    async result(@Query("poll") poll: number): Promise<[string[], number[]]> {
        return await this.pollService.getResult(poll);
    }

    @Get("info")
    async info(@Query("poll") poll: number): Promise<[string[], string, boolean]> {
        return await this.pollService.getPollInfo(poll);
    }
}
