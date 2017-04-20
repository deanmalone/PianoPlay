import { PianoPlayPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Piano Play App', function () {
  let page: PianoPlayPage;

  beforeEach(() => {
    page = new PianoPlayPage();
  });

  it('check piano keys count', () => {
    page.navigateTo();

    let piano = element.all(by.css('#piano'));
    //angular2 protractor does not support repeaters
    let keyList = element.all(by.css('#piano li'));
    let keySelect = element.all(by.css('_ngcontent-bxm-1'));
    keyList.count().then((text) => { console.log("Key Count" + text) });
    keySelect.count().then((text) => { console.log("Keys Count" + text) });
    //there should be 29 key
    expect(keyList.count()).toEqual(29);
    browser.sleep(1000);
  });
  //no expect, hopoing for no error when automating. 
  it('play song', () => {
    page.navigateTo();
    let keyList = element.all(by.css('#piano li'));

    let song = [3, 2, 1, 2, 3, 3, 3, 9, 2, 2, 2, 9, 3, 5, 5, 9, 3, 2, 1, 2, 3, 3, 3, 3, 2, 2, 3, 2, 1]
    for (let note of song) {
      browser.sleep(250);
      if (note == 9)
        browser.sleep(500);
      else
        keyList.get(20 + note).click();
    }
    browser.sleep(5000);
  });
});
