import { AppPage } from './app.po';
import { element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home title', () => {
    page.navigateTo();
    expect(page.getHomeTitle()).toEqual('Welcome to bbv Football Bets!');
  });

  it('should navigate to matches', () => {
    page.navigateTo();
    page.getMatchesLinkButton().click();

    expect(page.getFirstSubTitle()).toEqual('Matchday 1 (June 14, 2018)');
  });
});
