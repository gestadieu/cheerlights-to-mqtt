/*
Cheerlights to MQTT App
description: this simple node.js app follow @cheerlights stream on twitter and send the corresponding color to an MQTT broker.
author: gestadieu@gmail.com

TODO:

*/
let Twitter = require('twitter');
let mqtt = require('mqtt');
let config = require('./config');

var str = 'For more information, see Chapter 3.4.5.1 #ff9756 color';
// var re = /see (chapter \d+(\.\d)*)/i;
var re = /#([0-9a-f]{3}){1,2}/i;
// var re = /#(?:[0-9a-f]{3}){1,2}/i;
var found = str.match(re);

console.log(found[0]);

// let tweet = '@cheerlights now it is time for a #ff00aa !';
// let re = /^#([0-9a-f]{3}){1,2}$/i;
// let col = tweet.match(re);
// console.log('col ' + col);

// if (tweet.match(re)) {
//   console.log('found ' + RegExp.$1);
// } else {
//   console.log('cannot find');
// }

return process.exit(24);

// Twitter Settings
let twitter = new Twitter(config.twitter);
let stream = twitter.stream('statuses/filter', {
  track: '@cheerlights'
});

stream.on('data', function(tweet) {
  // console.log('Full data: ' + JSON.stringify(data));

  if (tweet.text == undefined) {
    console.log('Unexpected data object received ' + data);
  } else {
    console.log('Tweet: ' + data.text);
    // check if the text contains at least one known color (string from cheerlights)
    let new_color = '';
    config.cheerlights.colors.forEach(function(color, idx) {
      let regex = RegExp(color, 'i');
      if (tweet.text.search(regex) > -1) {
        new_color = config.cheerlights.codes[idx];
      }
    });
    // Check if an hex color code is present
    let regex2 = /#([0-9a-f]{3}){1,2}/i;
    let found_color = str.match(re);
    if (found_color[0] !== '') {
      new_color = found_color[0].substring(1);
    }

    if (new_color !== '') {
      // send the RGB code to MQTT channel
      client.publish(config.mqtt.publish_topic, new_color, {
        qos: 1,
        retain: true
      });
    }
  }
});

stream.on('error', function(error) {
  console.log('Error on stream');
  throw error;
});

//       stream.on('end', function(response) {
//         // Handle a disconnection
//         util.log('Stream ended :' + response);
//         open_twitter_stream(mqtt_client);
//       });

//       stream.on('destroy', function(response) {
//         // Handle a 'silent' disconnection from Twitter, no end/error event fired
//         util.log('Stream destroyed :' + response);
//       });

// MQTT Settings
let client = mqtt.connect(config.mqtt.host, {
  clean: false,
  username: config.mqtt.username,
  password: config.mqtt.password,
  clientId: config.mqtt.client
});

client.on('connect', function() {
  client.publish(config.mqtt.client_topic, config.mqtt.client, {
    retain: true
  });
});

client.on('end', function() {
  console.log('disconnected from broker...');
  console.log('Connection to broker closed: ' + client);
  //       process.exit(-1);
  // client.reconnect();
});

client.on('error', function(e) {
  console.log('error ' + e);
  process.exit(-1);
});

// function connect_to_mqtt(connected_callback) {
//   return mqtt.createClient(port, host, function(err, client) {
//     if (err) process.exit(1);

//     client.connect({ keepalive: 15 * 60 });

//     client.on('connack', function(packet) {
//       if (packet.returnCode === 0) {
//         util.log('Connected to broker');
//         connected_callback(client);
//       } else {
//         util.log('connack error %d', packet.returnCode);
//         process.exit(-1);
//       }
//     });
// }
