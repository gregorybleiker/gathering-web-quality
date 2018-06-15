import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { RankingsComponent } from './rankings.component';
import { RankingsService } from './rankings.service';
import { rankings } from './test.support';

describe('RankingsComponent', () => {
  const rankingsService = jasmine.createSpyObj('RankingsService', ['getAll']);
  const getAllSpy = rankingsService.getAll.and.returnValue(of(rankings));

  let component: RankingsComponent;
  let fixture: ComponentFixture<RankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RankingsComponent],
      providers: [{ provide: RankingsService, useValue: rankingsService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose rankings from service', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component.rankings$.subscribe(r => expect(r.length).toBe(3));
    });
  }));
});
