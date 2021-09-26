export class registerRequestDto {
    readonly name: String;
    readonly password: String;
    readonly address: String;
    constructor(name: String, password: String, address: String) {
        this.name = name;
        this.password = password;
        this.address = address;
    }
};