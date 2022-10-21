import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Movie } from './movie.schema';


describe('MovieController', () => {
  let controller: MovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [MovieService, { provide: getModelToken(Movie.name), useValue: jest.fn()}],
    }).compile();
    controller = module.get<MovieController>(MovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
