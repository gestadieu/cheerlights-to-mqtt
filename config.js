let config = {
  cheerlights: {
    colors1: {
      red: { hex: 'ff0000' },
      green: { hex: '00ff00' },
      blue: { hex: '0000ff' },
      cyan: { hex: '00FFFF' },
      white: { hex: 'ffffff' },
      warmwhite: { hex: 'FDF5E6' },
      oldlace: { hex: 'FDF5E6' },
      purple: { hex: '800080' },
      magenta: { hex: 'FF00FF' },
      yellow: { hex: 'FFFF00' },
      orange: { hex: 'FFA500' },
      pink: { hex: 'FFC0CB' }
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
    client: 'nodeapp-cheerlight-mqtt-gateway-heroku'
  }
};

module.exports = config;
