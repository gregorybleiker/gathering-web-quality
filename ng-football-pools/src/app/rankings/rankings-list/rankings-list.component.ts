import { Component, Input } from '@angular/core';

import { Ranking } from '../ranking.model';

@Component({
  selector: 'bbv-rankings-list',
  templateUrl: './rankings-list.component.html'
})
export class RankingsListComponent {
  @Input() rankings: Ranking[];

  displayedColumns = ['ranking', 'username', 'score'];
}
