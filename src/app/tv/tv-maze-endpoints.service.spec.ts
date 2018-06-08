import { TestBed, inject } from '@angular/core/testing';

import { TvMazeEndpointsService } from './tv-maze-endpoints.service';

describe('TvMazeEndpointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvMazeEndpointsService]
    });
  });

  it('should be created', inject([TvMazeEndpointsService], (service: TvMazeEndpointsService) => {
    expect(service).toBeTruthy();
  }));
});
