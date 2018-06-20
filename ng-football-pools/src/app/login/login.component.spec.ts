import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { throwError } from 'rxjs';
import { when } from 'jest-when';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';

describe('LoginComponent', () => {
  const AuthServiceMock = jest.fn(() => ({ login: jest.fn() }));
  const authServiceMock = new AuthServiceMock();

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should expose empty failure message', () => {
    fixture.detectChanges();
    expect(component.failureMessage).toBe('');
  });

  it('should have invalid form when no entries were made', () => {
    fixture.detectChanges();
    expect(component.loginForm.valid).toBe(false);
  });

  it('should have valid form when email and password are provided', () => {
    fixture.detectChanges();
    component.loginForm.setValue({
      email: 'john@doe.com',
      password: 'LetMeIn'
    });

    expect(component.loginForm.valid).toBe(true);
  });

  it('should call auth service on submit and expose failure message on failure', () => {
    component.loginForm.setValue({
      email: 'john@doe.com',
      password: 'WrongPassword'
    });

    when(authServiceMock.login)
      .calledWith('john@doe.com', 'WrongPassword')
      .mockReturnValue(throwError('401'));

    fixture.detectChanges();
    component.login();

    expect(component.failureMessage).toBe('Login failed. Please check your email & password.');
  });
});
