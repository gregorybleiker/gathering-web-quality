import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';

import { AuthInterceptorService } from '../auth/auth-interceptor.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { BetsComponent } from './bets.component';
import { BetsListComponent } from './bets-list/bets-list.component';
import { BetsService } from './bets.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: BetsComponent, canActivate: [AuthGuardService] }])
  ],
  declarations: [BetsComponent, BetsListComponent],
  providers: [
    BetsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class BetsModule {}
