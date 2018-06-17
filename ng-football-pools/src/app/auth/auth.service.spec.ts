import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { EventBusService } from '../event-bus.service';
import { Router } from '@angular/router';
import { LoginState } from './login.state';

describe('AuthService', () => {
  const token = {
    access_token:
      // tslint:disable-next-line:max-line-length
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6IkvDtmJpIEt1aG4iLCJyb2xlIjoiUGxheWVyIiwiaWF0IjoxNTI5MjY3MDg3LCJleHAiOjE1NzI0NjcwODd9.wSwADE0wY_LLojMGfdMYS_CRGTe9-SiHT2tb-uRDWrg'
  };

  const loggedOutState = LoginState.LoggedOut();
  const loggedInState = LoginState.LoggedIn({ id: 1, name: 'Köbi Kuhn', role: 'Player' });

  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };
  const router = jasmine.createSpyObj('Router', ['navigate']);

  let service: AuthService;
  let bus: EventBusService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, testEnvironmentProvider, { provide: Router, useValue: router }]
    });

    service = TestBed.get(AuthService);
    bus = TestBed.get(EventBusService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be logged out when not logged in', () => {
    expect(service.isLoggedIn()).toBeFalsy();
    expect(service.getLoginState()).toEqual(loggedOutState);
  });

  it('should be logged in when providing the right credentials', () => {
    service.login('koebi@email.com', 'koebi').subscribe(() => {
      expect(service.isLoggedIn()).toBeTruthy();
      expect(service.getLoginState()).toEqual(loggedInState);
    });

    const response = http.expectOne('http://localhost:3000/auth/login');
    expect(response.request.method).toEqual('POST');
    expect(response.request.body).toEqual({ email: 'koebi@email.com', password: 'koebi' });

    response.flush(token);
  });

  it('should publish new login state when providing the right credentials', () => {
    service.login('koebi@email.com', 'koebi').subscribe(() => {
      expect(service.isLoggedIn()).toBeTruthy();
    });

    bus.observe('LoginState').subscribe(state => {
      expect(state.userName).toBe('Köbi Kuhn');
      expect(state.role).toBe('Player');
    });

    const response = http.expectOne('http://localhost:3000/auth/login');

    response.flush(token);
  });

  it('should clear local storage when logging out', () => {
    service.login('bruno@email.com', 'LetMeIn').subscribe(() => {
      expect(localStorage.length).toBeGreaterThanOrEqual(1);

      service.logout();

      expect(localStorage.length).toBe(0);
    });

    const response = http.expectOne('http://localhost:3000/auth/login');

    response.flush(token);
  });

  it('should publish new login state when logging out', () => {
    service.login('bruno@email.com', 'LetMeIn').subscribe(() => {
      expect(service.isLoggedIn()).toBeTruthy();

      bus.observe('LoginState').subscribe(state => {
        expect(state.userName).toBe('');
        expect(state.role).toBe('');
      });

      service.logout();
    });

    const response = http.expectOne('http://localhost:3000/auth/login');

    response.flush(token);
  });
});
