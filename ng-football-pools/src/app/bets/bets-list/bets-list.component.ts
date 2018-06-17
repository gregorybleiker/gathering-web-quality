import { Component, Input } from '@angular/core';

import { MatchWithBet } from '../matchWithBet.model';

@Component({
  selector: 'bbv-bets-list',
  templateUrl: './bets-list.component.html',
  styleUrls: ['./bets-list.component.scss']
})
export class BetsListComponent {
  @Input() bets: MatchWithBet[];
}
