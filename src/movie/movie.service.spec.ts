import { Movie } from './movie.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService, { provide: getModelToken(Movie.name), useValue: jest.fn()}],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
