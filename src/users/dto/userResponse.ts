import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UserResponseDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}