import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Movie, MovieDocument } from "./movie.schema";

export class MovieService {
    constructor(
        @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
    ){}

    async getAll(filter:any = {}):Promise<Array<MovieDocument>>{
        return this.movieModel.find(filter).populate({
            path: 'user',
            select:['email']
        }).sort({rank: -1});
    }
    async create(info: CreateMovieDto): Promise<MovieDocument>{
        const movie = await this.movieModel.create(info)
        return movie.save()
    }    
    async update(id: string, info: UpdateMovieDto): Promise<MovieDocument>{
        let movie = await this.movieModel.findById(id).populate({
            path: 'user',
            select:['email']
        })
        movie = Object.assign(movie, info)
        return movie.save()
    }
}