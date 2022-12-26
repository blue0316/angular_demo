'use strict';

describe('Service: apiSender', function () {

  // load the service's module
  beforeEach(module('visualstApp'));

  // instantiate service
  var apiSender;
  beforeEach(inject(function (_apiSender_) {
    apiSender = _apiSender_;
  }));

  it('should do something', function () {
    expect(!!apiSender).toBe(true);
  });

});
