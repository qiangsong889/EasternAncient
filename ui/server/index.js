const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const frameguard = require('frameguard');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(express.static(path.join(__dirname, '../client/public')));

server.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'))
);

server.listen(PORT, () => console.log('serving static files on port ', PORT));
