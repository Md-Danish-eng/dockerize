'use strict';

const express = require('express');

// Constants
const PORT = 9080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello! Danish testtttti am nodejs');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

