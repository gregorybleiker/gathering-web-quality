import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map, flatMap, toArray } from 'rxjs/operators';

import { Bets, Bet } from './bets.model';
import { MatchWithBet } from './matchWithBet.model';
import { WorldcupService, Match } from '../worldcup';

@Injectable()
export class BetsService {
  constructor(
    private http: HttpClient,
    private worldcupService: WorldcupService,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  getAllByUserId(userId: number): Observable<MatchWithBet[]> {
    const url = `${this.baseUrl}/bets/${userId}`;

    const bets$ = this.http.get<Bets>(url).pipe(map(b => b.bets));
    const matches$ = this.worldcupService.getAllRounds().pipe(
      flatMap(round => round.map(r => r.matches)),
      flatMap(m => m),
      toArray()
    );

    const findBetByNumber = (bets, num) =>
      bets.find(bet => bet.num === num) || { score1: null, score2: null };

    const joinArrays = (matches: Match[], bets: Bet[]) =>
      matches.map(match => {
        const bet = findBetByNumber(bets, match.num);
        return {
          num: match.num,
          date: match.date,
          time: match.time,
          team1: match.team1,
          team2: match.team2,
          score1: bet.score1,
          score2: bet.score2
        };
      });

    return forkJoin(matches$, bets$).pipe(map(([matches, bets]) => joinArrays(matches, bets)));
  }
}
