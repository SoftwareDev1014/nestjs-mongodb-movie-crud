import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  thumbnail_link: string;

  @IsString()
  video_link: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  rank: number;
}