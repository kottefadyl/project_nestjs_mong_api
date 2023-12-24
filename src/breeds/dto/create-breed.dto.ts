import { IsEmpty, IsNotEmpty, IsString, isNotEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";

export class CreateBreedDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsString()
    readonly furType: string

    @IsEmpty({message:"you can't pass the user id"})
    readonly user: User
}
