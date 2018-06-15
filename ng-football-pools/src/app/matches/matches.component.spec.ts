import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { marbles } from 'rxjs-marbles/marbles';

import { MatchesComponent } from './matches.component';
import { WorldcupService } from '../worldcup';
import { worldcupData } from '../worldcup/test.support';

describe('MatchesComponent', () => {
  const worldcupService = jasmine.createSpyObj('WorldcupService', ['getAllRounds']);

  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesComponent],
      providers: [{ provide: WorldcupService, useValue: worldcupService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(
    'should expose rounds from service',
    marbles(m => {
      const rounds = m.cold('a|', { a: worldcupData.rounds });
      const getAllRoundsSpy = worldcupService.getAllRounds.and.returnValue(rounds);

      fixture.detectChanges();

      m.expect(component.rounds$).toBeObservable(rounds);
      expect(getAllRoundsSpy.calls.any).toBeTruthy();
    })
  );
});
