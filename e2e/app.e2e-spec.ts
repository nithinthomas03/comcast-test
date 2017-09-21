import { ComcastTestPage } from './app.po';

describe('comcast-test App', () => {
  let page: ComcastTestPage;

  beforeEach(() => {
    page = new ComcastTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
