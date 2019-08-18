import { Ng4ShopPage } from './app.po';

describe('ng4-shop App', () => {
  let page: Ng4ShopPage;

  beforeEach(() => {
    page = new Ng4ShopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
