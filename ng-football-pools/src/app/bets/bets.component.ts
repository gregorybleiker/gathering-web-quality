import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { BetsService } from './bets.service';
import { MatchWithBet } from './matchWithBet.model';

@Component({
  selector: 'bbv-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit, OnDestroy {
  matches: MatchWithBet[];

  private subscription: Subscription;

  constructor(private authService: AuthService, private betsService: BetsService) {}

  ngOnInit() {
    const userId = this.authService.getLoginState().id;
    this.subscription = this.betsService
      .getAllByUserId(userId)
      .pipe(map(match => match.filter(m => m.date > this.currentDate())))
      .subscribe(m => (this.matches = m));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  save() {
    console.log(this.matches);
  }

  private currentDate() {
    const datePipe = new DatePipe(navigator.language);
    const format = 'yyyy-MM-dd';

    return datePipe.transform(new Date(), format);
  }
}
