import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController{
    constructor(private readonly movieService: MovieService){}
    @Get('/')
    async getMovies(){
        return this.movieService.getAll();
    }
    
    @Post('/')
    async addMovie(
        @Request() req: Request,
        @Body() body:CreateMovieDto
    ){
        try {
            const user = req.headers["user"]
            // console.log("user", user)
            body.user= user._id
            console.log("test body", {body})
            const movie = await this.movieService.create(body);
            console.log({movie})
            return movie
        } catch (error) {
            console.log({error})
            return error
        }
    }
    @Post('/:id')
    async updateMovie(
        @Param('id') id: string,
        @Request() req: Request,
        @Body() body:UpdateMovieDto
    ){
        try {
            const movie = await this.movieService.update(id, body);
            return movie
        } catch (error) {
            return error
        }
    }
}