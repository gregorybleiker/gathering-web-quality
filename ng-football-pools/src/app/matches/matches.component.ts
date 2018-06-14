import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { WorldcupService, Round } from '../worldcup';

@Component({
  selector: 'bbv-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit, OnDestroy {
  rounds: Round[] = [];

  private subscription: Subscription;

  constructor(private service: WorldcupService) {}

  ngOnInit() {
    this.subscription = this.service.getAllRounds().subscribe(r => {
      if (r.matches.length >= 1) {
        this.rounds.push(r);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
