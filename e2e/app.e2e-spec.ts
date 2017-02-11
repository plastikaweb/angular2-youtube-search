import { Angular2YoutubeSearchPage } from './app.po';

describe('angular2-youtube-search App', function() {
  let page: Angular2YoutubeSearchPage;

  beforeEach(() => {
    page = new Angular2YoutubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
