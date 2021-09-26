export class registerRequestDto {
    readonly name: string;
    readonly password: string;
    readonly address: string;
    constructor(name: string, password: string, address: string) {
        this.name = name;
        this.password = password;
        this.address = address;
    }
};