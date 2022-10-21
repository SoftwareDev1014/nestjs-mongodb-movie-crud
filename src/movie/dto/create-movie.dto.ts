import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  thumbnail_link: string;

  @IsNotEmpty()
  @IsString()
  video_link: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  rank: number;

  @IsNotEmpty()
  @IsString()
  user: string;
}