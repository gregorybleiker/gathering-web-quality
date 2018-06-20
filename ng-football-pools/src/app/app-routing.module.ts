import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'matches', loadChildren: './matches/matches.module#MatchesModule' },
  { path: 'rankings', loadChildren: './rankings/rankings.module#RankingsModule' },
  { path: 'bets', loadChildren: './bets/bets.module#BetsModule' },
  { path: 'scores', loadChildren: './scores/scores.module#ScoresModule' },
  { path: 'login', redirectTo: 'login' },
  { path: 'logout', redirectTo: 'logout' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
