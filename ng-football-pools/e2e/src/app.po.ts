import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('bbv-root mat-toolbar span')).getText();
  }

  getHomeTitle() {
    return element(by.css('bbv-root bbv-home h1')).getText();
  }
}
