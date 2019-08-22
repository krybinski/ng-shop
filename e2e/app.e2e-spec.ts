import { NgShopPage } from './app.po';

describe('ng-shop App', () => {
  let page: NgShopPage;

  beforeEach(() => {
    page = new NgShopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
