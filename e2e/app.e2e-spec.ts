import { Qs3Page } from './app.po';

describe('qs3 App', () => {
  let page: Qs3Page;

  beforeEach(() => {
    page = new Qs3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
