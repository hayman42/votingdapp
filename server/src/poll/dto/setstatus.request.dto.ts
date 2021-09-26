export class setStatusRequestDto {
    readonly poll: number;
    readonly open: boolean;
    constructor(poll: number, open: boolean) {
        this.poll = poll;
        this.open = open;
    }
}