# Cheerlights to MQTT

This node.js app is following @cheerlights stream on twitter and sending the corresponding hex color code to a MQTT broker.
WIP...
This code will be used for IoT projects (more related code coming soon) with Aruino and ESP8266.

## Installation

1.  Rename config-template.js to config.js
2.  Add your personal info in the config.js file (twitter keys, mqtt broker...)
3.  run `yarn` to install packages
4.  Ready to run? `yarn run start` or `node index.js`

If you are using a cloud service such as Heroku, add twitter keys and mqtt brokers info into your process.env.

## Resources

* Cheerlights API: https://cheerlights.com/cheerlights-api/
* Twitter.js https://www.npmjs.com/package/twitter
* MQTT.js https://www.npmjs.com/package/mqtt
