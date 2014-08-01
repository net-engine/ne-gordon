'use strict';

describe('Factory: Flash', function () {

  beforeEach(module('gordon'));

  var Flash,
      scope;

  beforeEach(inject(function (_Flash_, $rootScope) {
    Flash = _Flash_;
    scope = $rootScope;
  }));

  it('should set a flash.message collection on the $rootScope', function () {
    Flash.add('Test 1');
    expect(!!scope.flash.messages).toBe(true);
  });

  describe('#add', function () {
    it('should add a message to the flash.message collection', function () {
      Flash.add('Test 2');
      expect(scope.flash.messages.length).toBe(1);

      Flash.add('Test 3');
      expect(scope.flash.messages.length).toBe(2);
    });

    it('should set a message\'s text', function () {
      Flash.add('Test 4');
      Flash.add('Test 5');
      
      expect(scope.flash.messages[0].text).toBe('Test 4');
      expect(scope.flash.messages[1].text).toBe('Test 5');
    });
  });

  describe('#dismiss', function () {
   it('should remove specific messages from the flash.message collection', function () {
      var flashOne = Flash.add('Test 6');
      var flashTwo = Flash.add('Test 7');

      expect(scope.flash.messages.length).toBe(2);
      
      Flash.dismiss(flashOne.id);
      
      expect(scope.flash.messages.length).toBe(1);
      expect(scope.flash.messages[0].text).toBe('Test 7');
    });
  });
});
