import { TestBed, inject } from '@angular/core/testing';

import { TvMazeService } from './tv-maze.service';

describe('TvMazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvMazeService]
    });
  });

  it('should be created', inject([TvMazeService], (service: TvMazeService) => {
    expect(service).toBeTruthy();
  }));
});
