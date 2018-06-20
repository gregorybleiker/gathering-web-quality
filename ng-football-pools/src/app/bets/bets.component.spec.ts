import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { LoginState } from '../auth/login.state';
import { BetsComponent } from './bets.component';
import { BetsService } from './bets.service';
import { matchesWithBets } from './test.support';

describe('BetsComponent', () => {
  let component: BetsComponent;
  let fixture: ComponentFixture<BetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetsComponent],
      providers: [
        { provide: AuthService, useValue: jest.fn() },
        { provide: BetsService, useValue: jest.fn() }
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
