(function () {
  'use strict';

  angular.module('neGordon')
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

