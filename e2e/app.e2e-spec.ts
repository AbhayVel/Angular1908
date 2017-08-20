import { MatPage } from './app.po';

describe('mat App', () => {
  let page: MatPage;

  beforeEach(() => {
    page = new MatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
