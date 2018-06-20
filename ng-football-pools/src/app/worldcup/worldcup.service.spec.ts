import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { marbles } from 'rxjs-marbles/mocha';
import { when } from 'jest-when';

import { WorldcupService } from './worldcup.service';
import { worldcupData } from './test.support';

describe('WorldcupService', () => {
  const HttpClientMock = jest.fn(() => ({ get: jest.fn() }));
  const httpClientMock = new HttpClientMock();

  let service: WorldcupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorldcupService,
        { provide: HttpClient, useValue: httpClientMock },
        { provide: 'worldcupUrl', useValue: 'http://openfootball.org' }
      ]
    });

    service = TestBed.get(WorldcupService);
  });

  it(
    'should get all rounds from API bakend',
    marbles(m => {
      when(httpClientMock.get)
        .calledWith('http://openfootball.org/world-cup.json/master/2018/worldcup.json')
        .mockReturnValue(m.hot('a|', { a: worldcupData }));

      m.expect(service.getAllRounds()).toBeObservable('a|', { a: worldcupData.rounds });
      expect(httpClientMock.get).toHaveBeenCalled();
    })
  );
});
