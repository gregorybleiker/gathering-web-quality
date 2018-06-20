import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';
import { AuthService } from '../auth/auth.service';
import { LoginState } from '../auth/login.state';
import { EventBusService } from '../event-bus.service';

describe('ToolbarComponent', () => {
  const loggedOutState = LoginState.LoggedOut();
  const loggedInState = LoginState.LoggedIn({ id: 1, name: 'Köbi Kuhn', role: 'Player' });

  const RouterMock = jest.fn(() => ({ navigate: jest.fn() }));
  const routerMock = new RouterMock();

  const AuthServiceMock = jest.fn(() => ({ getLoginState: jest.fn() }));
  const authServiceMock = new AuthServiceMock();

  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let bus: EventBusService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    authServiceMock.getLoginState.mockReturnValue(LoginState.LoggedOut());

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    bus = TestBed.get(EventBusService);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should expose logged out state when not logged in', () => {
    fixture.detectChanges();

    expect(component.loginState).toEqual(loggedOutState);
  });

  it('should expose logged in state when service has token', () => {
    authServiceMock.getLoginState.mockReturnValue(loggedInState);
    fixture.detectChanges();

    expect(component.loginState).toEqual(loggedInState);
  });

  it('should reflect Login state based on events from bus', () => {
    fixture.detectChanges();
    expect(component.loginState).toEqual(loggedOutState);

    bus.publish('LoginState', loggedInState);
    expect(component.loginState).toEqual(loggedInState);

    bus.publish('LoginState', loggedOutState);
    expect(component.loginState).toEqual(loggedOutState);
  });

  it('should navigate to login component when not logged id', () => {
    fixture.detectChanges();
    component.navigate();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to logout component when logged id', () => {
    fixture.detectChanges();
    bus.publish('LoginState', loggedInState);
    component.navigate();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/logout']);
  });
});
