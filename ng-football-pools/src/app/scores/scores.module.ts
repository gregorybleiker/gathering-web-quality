import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthInterceptorService } from '../auth/auth-interceptor.service';
import { ScoresComponent } from './scores.component';
import { ScoresService } from './scores.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: ScoresComponent }])
  ],
  declarations: [ScoresComponent],
  providers: [
    ScoresService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class ScoresModule {}
