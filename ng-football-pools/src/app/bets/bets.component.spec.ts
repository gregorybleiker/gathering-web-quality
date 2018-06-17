import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { LoginState } from '../auth/login.state';
import { BetsComponent } from './bets.component';
import { BetsService } from './bets.service';
import { matchesWithBets } from './test.support';

describe('BetsComponent', () => {
  const authService = jasmine.createSpyObj('AuthService', ['getLoginState']);
  const betsService = jasmine.createSpyObj('BetsService', ['getAllByUserId']);

  const getLoginStateSpy = authService.getLoginState.and.returnValue(
    LoginState.LoggedIn({ id: 1, name: 'Köbi Kuhn', role: 'Player' })
  );
  const getAllByUserIdSpy = betsService.getAllByUserId.and.returnValue(of(matchesWithBets));

  let component: BetsComponent;
  let fixture: ComponentFixture<BetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetsComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: BetsService, useValue: betsService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
