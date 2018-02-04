/**
 * Created by bhavyaagg on 04/02/18.
 */

const express = require('express');
const app = express();

app.get('/hello', (r,s) => s.send("Hello"));

app.listen(4000, () => {
  console.log("Listening on port 4000")
});