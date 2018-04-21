let mqtt = require('mqtt');
let config = require('./config');

let client = mqtt.connect(config.mqtt.host, {
  username: config.mqtt.username,
  password: config.mqtt.password,
  clientId: config.mqtt.client + '-client-test'
});

client.on('connect', function() {
  client.publish(config.mqtt.client_topic, 'client-test');
  client.subscribe(config.mqtt.subscribe_topic);
});

client.on('message', function(topic, message) {
  console.log('new color: ', message.toString());
  client.end();
});

client.on('end', function() {
  console.log('disconnected from broker...');
});
