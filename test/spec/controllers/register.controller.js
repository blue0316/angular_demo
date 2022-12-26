'use strict';

describe('Controller: RegisterControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('visualstApp'));

  var RegisterControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterControllerCtrl = $controller('RegisterControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterControllerCtrl.awesomeThings.length).toBe(3);
  });
});
