export class signInRequestDto {
    readonly name: String;
    readonly password: String;
    constructor(name: String, password: String) {
        this.name = name;
        this.password = password;
    }
}