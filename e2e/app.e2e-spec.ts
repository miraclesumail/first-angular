import { MyAppPage } from './app.po';

describe('my-app App', () => {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
