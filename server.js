/**
 * Created by bhavyaagg on 04/02/18.
 */

const express = require('express');
const app = express();
const config = require('./config');

app.get('/hello', (r, s) => s.send("Hello There"));

app.listen(config.PORT, () => {
  console.log("Listening on port " + config.PORT);
});