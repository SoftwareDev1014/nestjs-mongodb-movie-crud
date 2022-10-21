import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Movie, MovieSchema } from './movie.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";


@Module({
    imports:[
        MongooseModule.forFeature([
            {name: Movie.name, schema: MovieSchema}
        ])
    ],
    controllers: [MovieController],
    providers: [MovieService],
    exports: [MovieService]
})
export class MovieModule{}