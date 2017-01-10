import { PianoPlayPage } from './app.po';

describe('piano-play App', function() {
  let page: PianoPlayPage;

  beforeEach(() => {
    page = new PianoPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
