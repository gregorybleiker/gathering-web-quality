import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class LoginModule {}
