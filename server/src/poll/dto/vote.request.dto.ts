export class voteRequestDto {
    readonly voter: string;
    readonly poll: number;
    readonly candidate: string;
    constructor(voter: string, poll: number, candidate: string) {
        this.voter = voter;
        this.poll = poll;
        this.candidate = candidate;
    }
}