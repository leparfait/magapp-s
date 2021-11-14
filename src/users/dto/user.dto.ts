import { User } from "../entities/user.entity";

export class UserDto {

    id: string;
    
    readonly email: string;
    
    readonly password: string;

    readonly name: string;

    readonly role: string;
    // Gender;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.password = user.password;
        this.name = user.name;
        this.role = user.role;

    }
}