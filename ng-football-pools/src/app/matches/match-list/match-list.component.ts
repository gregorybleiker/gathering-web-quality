import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Match } from '../../worldcup';

@Component({
  selector: 'bbv-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent {
  @Input() matches: Match[];

  displayedColumns = ['time', 'city', 'team1', 'team2'];
  dataSource = new MatTableDataSource(this.matches);

  selectRow(row) {
    console.log(row);
  }
}
