import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatchesComponent } from './matches.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MatchesComponent }
    ])
  ],
  declarations: [MatchesComponent]
})
export class MatchesModule { }
