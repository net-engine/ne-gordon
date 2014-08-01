(function () {
  'use strict';

  angular.module('gordon')
    .directive('gFlash', ['Flash', function (Flash) {
      return {
        replace: true,
        template: '' + 
          '<div class="flash-container" ng-class="{ active: flash.messages.length }">' +
            '<div class="flash-message" ng-repeat="message in flash.messages" ng-class="message.type">' +
              '<span>{{message.text}}</span>' +
              '<button class="icon-close icon-only" ng-click="Flash.dismissMessage(message.id)">' +
                'Close' +
              '</button>' +
            '</div>' +
          '</div>',
        restrict: 'E',
        link: function postLink(scope) {
          scope.Flash = Flash;
        }
      };
    }]);
})();

