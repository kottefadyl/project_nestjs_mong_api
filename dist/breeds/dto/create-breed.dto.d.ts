import { User } from "../../auth/schemas/user.schema";
export declare class CreateBreedDto {
    readonly name: string;
    readonly furType: string;
    readonly user: User;
}
