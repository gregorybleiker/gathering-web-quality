import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { AuthService } from '../../auth/auth.service';

describe('LogoutComponent', () => {
  const AuthServiceMock = jest.fn(() => ({ logout: jest.fn() }));
  const authServiceMock = new AuthServiceMock();

  const RouterMock = jest.fn(() => ({ navigate: jest.fn() }));
  const routerMock = new RouterMock();

  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout with service', () => {
    expect(authServiceMock.logout).toHaveBeenCalled();
  });

  it('should navigate to home component', () => {
    expect(routerMock.navigate).toHaveBeenCalledWith(['/home']);
  });
});
