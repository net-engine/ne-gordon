# NE Gordon

An easy peasy Flash factory / directive for AngularJS

## Install

```
bower install ne-gordon --save
```

Link it up

```
/bower_components/ne-gordon/dist/ne-gordon.js
```

Include it as a dependency

```js
angular.module('myApp', ['neGordon']);
```

## Use

Where ever you'd like your flashes to appear:

```html
<g-flash></g-flash>
```

Whenever you'd like to add one:

```js
Flash.add('Horay!', 'success');

// Or

Flash.add('Whoops!', 'failure');
```

### Mark up

The mark up the directive will add is simply:

```html
<div class="ne-gordon-flash-container" ng-class="{ active: flash.messages.length }">
  <div class="ne-gordon-flash-message" ng-repeat="message in flash.messages" ng-class="message.type">
    <span class="ne-gordon-flash-message-text">
      {{message.text}}
    </span>
    
    <button type="button" class="ne-gordon-flash-message-dismiss" ng-click="Flash.dismissMessage(message.id)">
      Close
    </button>
  </div>
</div>
```
