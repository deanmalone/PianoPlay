import { PianoPlayPage } from './app.po';

describe('Piano Play App', function() {
  let page: PianoPlayPage;

  beforeEach(() => {
    page = new PianoPlayPage();
  });

  it('should display App Title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('PIANO PLAY');
  });
});
