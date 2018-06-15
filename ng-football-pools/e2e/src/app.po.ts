import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHomeTitle() {
    return element(by.css('bbv-root bbv-home h1')).getText();
  }

  getMatchesLinkButton() {
    return element(by.id('matchesLink'));
  }

  getFirstSubTitle() {
    return element.all(by.css('h3')).first().getText();
  }
}
