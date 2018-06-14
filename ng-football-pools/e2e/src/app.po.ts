import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHomeTitle() {
    return element(by.css('bbv-root bbv-home h1')).getText();
  }
}
