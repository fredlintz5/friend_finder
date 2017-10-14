const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survey', (req,res) => {
	res.sendFile(path.join(__dirname, '/app/public/survey.html'));
})



app.listen(port, () => console.log(`Listening on port ${port}`));


