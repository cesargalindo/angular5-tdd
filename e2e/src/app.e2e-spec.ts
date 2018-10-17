import { AppPage } from './app.po';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { browser } from 'protractor';

// https://github.com/angular/protractor/issues/4307 
// _debugger and the legacy CLI debugger were removed in Node 8: nodejs/node@90476ac
// browser.pause();

describe('Demo Protracter Test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test Tour of Heroes');
  });

  it('Should start with 1 point', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');
  });

  it('Should increase points by clicking plus1', () => {
    page.navigateTo();

    expect(page.getPoints()).toEqual('1');
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('2');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('5');
  });

  it('Should rest points by clicking plus1', () => {
    page.navigateTo();

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('4');

    page.getResetButton().click();

    expect(page.getPoints()).toEqual('0');
  });

  it('shoult display About button', () => {
    page.navigateTo();
    expect(page.getAboutButton().getText()).toEqual('About');
  });

  it('should route to About page', () => {
    page.navigateTo();
    page.getAboutButton().click();
    expect(page.getAboutText()).toEqual('About');
  });


});