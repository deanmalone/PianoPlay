import { PianoPlayPage } from './app.po';
import { browser, element, by } from 'protractor';

//this is a jasmine suite, inside a protractor suite. 
describe('Eric Jasmine suite', function () {
  var callableVariable = 'maybe im a global variable';
  // not allowed! want an error???
  //expect(2).toEqual(2);

  it('Erics interinal spec', function () {
    expect("Hi").toEqual("Bye");
  })
})

//top level suite, this entire file is a suite to protractor!
it('Eric top spec', function () {
  //make some 
  expect(3).toEqual(3);
});

//start test case function
describe('Piano Home Page Test Suite', function () {
  //helper object 
  let page: PianoPlayPage;

  //before each test case. 
  beforeEach(() => {

  });

  beforeAll(() => {
    page = new PianoPlayPage();
    page.navigateTo();
  })

  it('check for play button', function () {
    //create locator
    let buttonLocator = by.id('play-btn');
    //create element finder
    let elementFinder = element(buttonLocator);
    //create promise checker
    let asyncPromise = elementFinder.isDisplayed();
    // assert! this waits for the promise to finish
    expect(asyncPromise).toEqual(true);
    elementFinder.click();
  });

  //a test case. 
  it('check piano keys count', () => {
    //angular2 protractor does not support repeaters
    //get list elements
    let keyList = element.all(by.css('#piano li'));
    //log the key count if you want. 
    //keyList.count().then((text) => { console.log("Key Count" + text) });
    //there should be 29 key
    expect(keyList.count()).toEqual(29);
    //leave the browser open for 1 second for demo. 
    browser.sleep(4000);
  });

  //no expect, hopoing for no error when automating. 
  it('play song', () => {
    let keyList = element.all(by.css('#piano li'));

    let song = [3, 2, 1, 2, 3, 3, 3, 9, 2, 2, 2, 9, 3, 5, 5, 9, 3, 2, 1, 2, 3, 3, 3, 3, 2, 2, 3, 2, 1];
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
