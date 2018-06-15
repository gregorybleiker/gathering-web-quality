import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatTableModule } from '@angular/material';

import { RankingsComponent } from './rankings.component';
import { RankingsListComponent } from './rankings-list/rankings-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forChild([{ path: '', component: RankingsComponent }])
  ],
  declarations: [RankingsComponent, RankingsListComponent]
})
export class RankingsModule {}
