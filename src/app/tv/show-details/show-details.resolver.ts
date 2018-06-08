import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShowDetails} from '@models';
import {ShowDetailsParams} from '../../app-routing.module';
import {TvMazeService} from '../tv-maze.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ShowDetailsResolver implements Resolve<ShowDetails> {
  constructor(private tv: TvMazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShowDetails> {
    const {id} = route.params as ShowDetailsParams;
    return this.tv.getShow(id);
  }

}
