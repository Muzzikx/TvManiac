import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  searchCache = {
    query: '',
    shows: []
  };

  constructor() {
  }
}
