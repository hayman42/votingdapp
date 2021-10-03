import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { voteRequestDto } from "src/poll/dto/vote.request.dto";
import { PollService } from "src/poll/poll.service";
import { UserDocument, User, VoteInfo } from "src/schemas/user.schema";
import { infoResponseDto } from "./dto/user.info.response.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
        private pollService: PollService) { }

    async getInfo(name: string): Promise<infoResponseDto> {
        let user = await this.userModel.findOne({ name: name }).exec();
        return new infoResponseDto(user);
    }

    async addVoteInfo(requestDto: voteRequestDto): Promise<infoResponseDto> {
        const { poll, voter, candidate } = requestDto;
        const [candidates, content, open] = await this.pollService.getPollInfo(poll);
        let user = await this.userModel.findOne({ name: voter }).exec();
        let voteInfo = new VoteInfo;
        voteInfo.poll = poll;
        voteInfo.candidate = candidate;
        voteInfo.content = content;
        voteInfo.win = "TBD";

        user.voteinfo.push(voteInfo);
        await user.save();
        return new infoResponseDto(user);
    }
}