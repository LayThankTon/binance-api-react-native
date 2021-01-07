"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeReconnectingWebsocket = _interopRequireDefault(require("react-native-reconnecting-websocket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://www.npmjs.com/package/react-native-reconnecting-websocket
//https://github.com/joewalnes/reconnecting-websocket
//https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/WebSocket.js
var _default = function _default(url) {
  var rws = new _reactNativeReconnectingWebsocket.default(url, [], {
    timeoutInterval: 4000,
    maxReconnectInterval: 10000,
    reconnectInterval: 4000
  });
  return rws;
};

exports.default = _default;