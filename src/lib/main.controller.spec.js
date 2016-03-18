import MainController from './main.controller'
describe('controllers', () => {
  let vm;

  beforeEach(() => {
    vm = new MainController();
  });

  it('should exist', () => {
    expect(vm).toBeDefined();
    expect(vm.main).toBeTruthy();
  });


});
