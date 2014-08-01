(function () {
  'use strict';

  angular.module('gordon', []);  
})();


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


(function () {
  'use strict';

  angular.module('gordon')
    .factory('Flash', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
      var messages         = [],
          defaultDuration  = 3000,
          defaultType      = 'success';

      function generateId() {
        return Math.random().toString(36).slice(-18);
      }
      
      function publishFlash () {
        $rootScope.flash = {
          messages: messages
        };
      }

      function addMessage(text, type, duration) {
        var messageId = generateId(),
            timer     = duration || defaultDuration;

        
        var message = {
          id: messageId,
          type: type || defaultType,
          text: text
        };

        messages.push(message);

        $timeout(function () {
          dismissMessage(messageId);
        }, timer);

        publishFlash();

        return message;
      }

      function dismissMessage (id) {
        for (var i = 0; i < messages.length; i++) {
          var message = messages[i];

          if (message.id === id) {
            messages.splice(i, 1);
          }
        }
        publishFlash();
      }

      return {
        add: addMessage,
        dismiss: dismissMessage
      };
    }]);
})();

