/*
Cheerlights to MQTT App
description: simple app following @cheerlights stream on twitter 
and sending the corresponding hex color code to a MQTT broker.
author: gestadieu@gmail.com

TODO:

*/
let Twitter = require('twitter');
let mqtt = require('mqtt');
let config = require('./config');

// Twitter Settings
let twitter = new Twitter(config.twitter);
let stream = twitter.stream('statuses/filter', {
  track: '@cheerlights'
});

// MQTT Settings
let client = mqtt.connect(config.mqtt.host, {
  clean: false,
  username: config.mqtt.username,
  password: config.mqtt.password,
  clientId: config.mqtt.client
});

stream.on('data', function(tweet) {
  if (tweet.text == undefined) {
    console.error('Unexpected data object received ' + JSON.stringify(tweet));
  } else {
    console.log('Tweet: ' + tweet.text);
    // check if the text contains at least one known color (official color string from cheerlights API)
    let new_color = '';
    // Object.keys(config.cheerlights.colors1).forEach(function(color, idx){
    config.cheerlights.colors.forEach(function(color, idx) {
      let re = RegExp(color, 'i');
      if (tweet.text.search(re) > -1) {
        // new_color = config.cheerlights.colors1[color].hex;
        new_color = config.cheerlights.codes[idx];
      }
    });
    // Check if an hex color code is present
    let re1 = /#([0-9a-f]{3}){1,2}/i;
    let found_color = tweet.text.match(re1);
    if (found_color && found_color[0] !== '') {
      new_color = found_color[0].substring(1);
    }

    if (new_color !== '') {
      // console.log('The new color found is ' + new_color);
      // send the RGB code to MQTT channel
      client.publish(config.mqtt.publish_topic, new_color, {
        qos: 1,
        retain: true
      });
    } else {
      // console.log('No new color found in the last tweet :-(');
    }
  }
});

stream.on('error', function(error) {
  console.error('Error on twitter stream', error);
  // throw error;
});

stream.on('end', function(response) {
  console.error('Twitter stream ending now...');
});

stream.on('destroy', function(response) {
  // Handle a 'silent' disconnection from Twitter, no end/error event fired
});

client.on('connect', function() {
  client.publish(config.mqtt.client_topic, config.mqtt.client);
});

client.on('end', function() {
  console.error('disconnected from broker...');
  client.reconnect();
});

client.on('error', function(e) {
  console.error('broker error ' + e);
  process.exit(-1);
});
