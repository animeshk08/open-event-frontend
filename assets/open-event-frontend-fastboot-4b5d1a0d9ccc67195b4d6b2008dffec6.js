define("open-event-frontend/initializers/ajax",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ajax-service",initialize:function(){}}}),define("open-event-frontend/initializers/error-handler",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"error-handler",initialize:function(e){Ember.onerror||(Ember.onerror=function(e){var r="There was an error running your app in fastboot. More info about the error: \n ".concat(e.stack||e)
Ember.Logger.error(r)})}}
e.default=r})
