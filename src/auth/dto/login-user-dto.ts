import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class LoginUserDto {
    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    password:string;
}