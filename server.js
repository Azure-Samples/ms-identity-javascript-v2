/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const argv = require('yargs')
    .usage('Usage: $0 -p [PORT]')
    .alias('p', 'port')
    .describe('port', '(Optional) Port Number - default is 3000')
    .strict()
    .argv;

const DEFAULT_PORT = 3000;

//initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT; // -p {PORT} || 3000;

if (argv.p) {
    port = argv.p;
}

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders
app.use(express.static('app'));

// Set up a route for index.html.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);
