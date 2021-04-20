import { AppPage } from './app.po';
import 'jasmine';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toContain('Main Application');
  });
});
