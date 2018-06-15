import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Ranking } from './ranking.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {
  constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl: string) {}

  getAll(): Observable<Ranking[]> {
    const url = `${this.baseUrl}/rankings`;
    return this.http.get<Ranking[]>(url).pipe(catchError(this.handleError([])));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
