import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';

import { Worldcup, Round } from '.';

@Injectable({
  providedIn: 'root'
})
export class WorldcupService {
  constructor(private http: HttpClient, @Inject('worldcupUrl') private baseUrl: string) {}

  getAllRounds(): Observable<Round[]> {
    const url = this.baseUrl + '/world-cup.json/master/2018/worldcup.json';
    return this.http.get<Worldcup>(url).pipe(
      map(w => w.rounds),
      map(round => round.filter(r => r.name.startsWith('Matchday')))
    );
  }
}
