import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPoints() {
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }

  getPlus1Button() {
    return element(by.cssContainingText('button', 'Plus 1'));
  }

  getResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }

  getAboutButton() {
    return element(by.css('[routerlink="/about'));
  }

  getAboutText() {
    return element(by.css('ng-component h2')).getText();
  }

}