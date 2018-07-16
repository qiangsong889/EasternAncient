import http from 'http';
import App from './src/config/express';
//postgres database
// import './src/config/database/SQL';
//mongodb
// import './src/config/database/mongoDB';

const app = App.express;
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, err => {
  if (err) console.error(err);
  console.log('successfully connected to port', PORT);
});
