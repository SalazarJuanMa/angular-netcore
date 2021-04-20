import { AppPage } from './app.po';
import 'jasmine';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toContain('login');
  });
});
