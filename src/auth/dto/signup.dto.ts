import {IsEmail,IsNotEmpty,IsString,MinLength, MaxLength} from 'class-validator'

export class SignUpDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail({},{message: 'please enter correct email'})
    readonly email: string;

    @IsNotEmpty()
    @IsString({message:" entrer une chaine "})
    @MinLength(5)
    @MaxLength(5,{message:"you can't inter mor than 5 caracter in your password"})
    readonly password: string;
}


export const jwtConstants = {
    secret: 'SOURCECODE.',
};
  

