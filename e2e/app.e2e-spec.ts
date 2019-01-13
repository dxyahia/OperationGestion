import { OperationGestionPage } from './app.po';

describe('operation-gestion App', function() {
  let page: OperationGestionPage;

  beforeEach(() => {
    page = new OperationGestionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
