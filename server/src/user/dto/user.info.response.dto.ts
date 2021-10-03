import { VoteInfo, User } from "../../schemas/user.schema";

export class infoResponseDto {
    readonly name: string;
    readonly address: string;
    readonly voteinfo: VoteInfo[];
    constructor(user: User) {
        this.name = user.name;
        this.address = user.address;
        this.voteinfo = user.voteinfo;
    }
};