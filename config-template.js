let config = {
  cheerlights: {
    colors: [
      'red',
      'green',
      'blue',
      'cyan',
      'white',
      'warmwhite',
      'oldlace',
      'purple',
      'magenta',
      'yellow',
      'orange',
      'pink'
    ],
    codes: [
      'ff0000',
      '00ff00',
      '0000ff',
      '00FFFF',
      'ffffff',
      'FDF5E6',
      'FDF5E6',
      '800080',
      'FF00FF',
      'FFFF00',
      'FFA500',
      'FFC0CB'
    ]
  },
  twitter: {
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  },

  mqtt: {
    host: '',
    port: '1183',
    username: '',
    password: '',
    publish_topic: 'cheerlights/color',
    client_topic: 'cheerlights/clients',
    client: 'nodeapp-cheerlight-mqtt-gateway'
  }
};

module.exports = config;
