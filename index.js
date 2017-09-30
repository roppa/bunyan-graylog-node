const http = require('http');
const bunyan = require('bunyan');
const gelfStream = require('gelf-stream');

const stream = gelfStream.forBunyan('graylog')
const log = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    type: 'raw',
    stream,
  }]});

http.createServer((req, res) => {
  const then = Date.now();
  log.info(`Hello ${then}`);
  res.end(`Hello ${then}`);
}).listen(8001);
