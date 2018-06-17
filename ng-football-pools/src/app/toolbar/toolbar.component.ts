import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { LoginState } from '../auth/login.state';
import { AuthService } from '../auth/auth.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'bbv-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  loginState: LoginState;

  constructor(
    private router: Router,
    private authService: AuthService,
    private bus: EventBusService
  ) {}

  ngOnInit() {
    this.loginState = this.authService.getLoginState();
    this.subscription = this.bus
      .observe('LoginState')
      .subscribe(state => (this.loginState = state));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  navigate() {
    this.router.navigate([this.loginState.routerLink]);
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }
}
