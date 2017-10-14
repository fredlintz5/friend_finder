const express = require('express');
const app = express();
const path = require('path');

/* GET home page. */
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'home.html'));
});

console.log('shit');