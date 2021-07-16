const express = require('express');
const path = require('path');

const app = express();

var PORT = process.env.PORT || 3001;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, function() {console.log("app listening")})
