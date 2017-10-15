const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
// const friends = require('./app/data/friends.js');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/app/public/home.html'));
// });

// app.get('/survey', (req,res) => {
// 	res.sendFile(path.join(__dirname, '/app/public/survey.html'));
// })

// app.get('/api/friends', (req, res) => {
// 	res.json(friends);
// })

// app.post('/api/friends', (req, res) => {
// 	let newFriend = req.body;
// 	friends.push(newFriend);
// })



app.listen(port, () => console.log(`Listening on port ${port}`));


