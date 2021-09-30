export class makePollRequestDto {
    readonly candidates: string[];
    readonly content: string;
    constructor(candidates: string[], content: string) {
        this.candidates = candidates;
        this.content = content;
    }
}