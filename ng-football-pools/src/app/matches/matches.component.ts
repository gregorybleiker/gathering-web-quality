import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { WorldcupService, Round } from '../worldcup';

@Component({
  selector: 'bbv-matches',
  templateUrl: './matches.component.html'
})
export class MatchesComponent implements OnInit {
  rounds$: Observable<Round[]>;

  constructor(private service: WorldcupService) {}

  ngOnInit() {
    this.rounds$ = this.service.getAllRounds();
  }
}
