'use strict';

describe('Directive: gFlash', function () {

  beforeEach(module('neGordon'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should exist', inject(function ($compile) {
    element = angular.element('<g-flash></g-flash>');
    element = $compile(element)(scope);
    expect(!!element).toBe(true);;
  }));
});
