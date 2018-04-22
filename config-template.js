let config = {
  cheerlights: {
    colors1: {
      red: { hex: 'ff0000' },
      green: '00ff00',
      blue: '0000ff',
      cyan: '00FFFF',
      white: 'ffffff',
      warmwhite: 'FDF5E6',
      oldlace: 'FDF5E6',
      purple: '800080',
      magenta: 'FF00FF',
      yellow: 'FFFF00',
      orange: 'FFA500',
      pink: 'FFC0CB'
    },
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
