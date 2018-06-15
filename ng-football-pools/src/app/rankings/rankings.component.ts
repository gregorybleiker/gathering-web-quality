import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RankingsService } from './rankings.service';
import { Ranking } from './ranking.model';

@Component({
  selector: 'bbv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
  rankings$: Observable<Ranking[]>;

  constructor(private service: RankingsService) {}

  ngOnInit() {
    this.rankings$ = this.service.getAll();
  }
}
