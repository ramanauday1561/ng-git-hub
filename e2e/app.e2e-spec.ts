import { NgGitHubPage } from './app.po';

describe('ng-git-hub App', function() {
  let page: NgGitHubPage;

  beforeEach(() => {
    page = new NgGitHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
