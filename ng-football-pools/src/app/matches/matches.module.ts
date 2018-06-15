import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatTableModule } from '@angular/material';

import { MatchesComponent } from './matches.component';
import { RoundComponent } from './round/round.component';
import { MatchListComponent } from './match-list/match-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forChild([{ path: '', component: MatchesComponent }])
  ],
  declarations: [MatchesComponent, RoundComponent, MatchListComponent]
})
export class MatchesModule {}
