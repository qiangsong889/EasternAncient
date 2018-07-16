const envBuild = {
  server: ['PORT=1337'],
  client: [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'ENVPREFIX=REACT_APP_',
    'REST_SERVER_URL=http://localhost:3396'
  ]
};

module.exports = envBuild;
