(function () {
  'use strict';

  angular.module('neGordon')
    .directive('gFlash', ['Flash', function (Flash) {
      return {
        replace: true,
        template: '' + 
          '<div class="ne-gordon-flash-container" ng-class="{ active: flash.messages.length }">' +
            '<div class="ne-gordon-flash-message" ng-repeat="message in flash.messages" ng-class="message.type">' +
              '<span class="ne-gordon-flash-message-text">{{message.text}}</span>' +
              '<button type="button" class="ne-gordon-flash-message-dismiss" ng-click="Flash.dismissMessage(message.id)">' +
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

