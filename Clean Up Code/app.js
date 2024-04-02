const http = require('http');
const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(2000, () => console.log('Server started on port 2000'));
