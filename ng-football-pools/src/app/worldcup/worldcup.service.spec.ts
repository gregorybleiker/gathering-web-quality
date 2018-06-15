import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { marbles } from 'rxjs-marbles/mocha';

import { WorldcupService } from './worldcup.service';
import { worldcupData } from './test.support';

describe('WorldcupService', () => {
  const httpClient = jasmine.createSpyObj('HttpClient', ['get']);

  let service: WorldcupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorldcupService,
        { provide: HttpClient, useValue: httpClient },
        { provide: 'worldcupUrl', useValue: 'http://openfootball.org' }
      ]
    });

    service = TestBed.get(WorldcupService);
  });

  it(
    'should get all rounds from API bakend',
    marbles(m => {
      const getSpy = httpClient.get
        .withArgs('http://openfootball.org/world-cup.json/master/2018/worldcup.json')
        .and.returnValue(m.hot('a|', { a: worldcupData }));

      m.expect(service.getAllRounds()).toBeObservable('a|', { a: worldcupData.rounds });
      expect(getSpy.calls.any).toBeTruthy();
    })
  );
});
