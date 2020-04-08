const app = require('./backend/app');
const debug = require('debug')('node-angular');
const http = require('http');

const normalizePort = val => {
  const portI = parseInt(val, 10);

  if (isNaN(portI)) {
    return val;
  }

  if (portI >= 0) {
    return portI;
  }

  return false;
};

const port = normalizePort(process.env.PORT || '3000');

const onError = error => {
  if (error.svscall !== 'listen') {
    throw error;
  }

  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port ' + port;

  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
};

const server = http.createServer(app);

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port;
  debug('Listening on ' + bind);
};

app.set('port', port);

server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
