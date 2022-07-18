const http = require('http');
const https = require('https');

const app = require('./src/app.js');

const httpServer = http.createServer(app);
const httpsServer = https.createServer(app);

httpServer.listen(8080);
httpsServer.listen(8443);
