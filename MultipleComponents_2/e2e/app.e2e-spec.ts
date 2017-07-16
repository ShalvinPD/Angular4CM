import { MultipleComponentsPage } from './app.po';

describe('multiple-components App', () => {
  let page: MultipleComponentsPage;

  beforeEach(() => {
    page = new MultipleComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
