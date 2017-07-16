import { HelloNgPage } from './app.po';

describe('hello-ng App', () => {
  let page: HelloNgPage;

  beforeEach(() => {
    page = new HelloNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
