const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=development',
    'PORT=1992',
    // 'LOCAL_USER=postgres',
    'LOCAL_HOST=localhost',
    // 'LOCAL_DATABASE=barter',
    // 'LOCAL_PASSWORD=000000',
    // 'LOCAL_PORT=5432',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=ShayneCodeTemplate',
    'EMAIL_KEY='
  ]
};

module.exports = envBuild;
