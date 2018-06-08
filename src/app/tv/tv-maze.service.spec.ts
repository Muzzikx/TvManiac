import {TestBed} from '@angular/core/testing';
import {TvMazeService} from './tv-maze.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ShowDetails} from '@models';
import {TvMazeEndpointsService} from './tv-maze-endpoints.service';

describe('TvMazeService', () => {
  let service: TvMazeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TvMazeService, /*to the same as at the top*/
        // {
        //   provide: TvMazeService,
        //   useExisting: TvMazeService,
        // }
        {
          provide: TvMazeEndpointsService,
          // useClass: class {
          //   root = 'http://test.api.com';
          // },
          useValue: {
            root: 'http://test.api.com' /*to the same as at the top*/
          },
        },
      ],
    });

    service = TestBed.get(TvMazeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('getShow', () => {
    service.getShow('321')
      .subscribe(show => {
        expect(show).toEqual(jasmine.objectContaining({id: 321, name: 'Show Three'}));
      });

    const req = httpMock.expectOne('http://test.api.com/shows/321?embed=episodes');
    expect(req.request.method).toBe('GET');

    req.flush(<Partial<ShowDetails>>{
      id: 321,
      name: 'Show Three',
    });

    httpMock.verify();
  });
});
