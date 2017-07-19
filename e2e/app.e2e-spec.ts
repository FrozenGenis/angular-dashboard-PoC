import { AngularDashboardPocPage } from './app.po';

describe('angular-dashboard-poc App', () => {
  let page: AngularDashboardPocPage;

  beforeEach(() => {
    page = new AngularDashboardPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
