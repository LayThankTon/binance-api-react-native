import ReconnectingWebSocket from 'react-native-reconnecting-websocket'
//https://www.npmjs.com/package/react-native-reconnecting-websocket
//https://github.com/joewalnes/reconnecting-websocket
//https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/WebSocket.js

export default url => {
  const rws = new ReconnectingWebSocket(url, [], {
    timeoutInterval: 4000,
    maxReconnectInterval: 10000,
    reconnectInterval: 4000,
  })
  return rws
}
