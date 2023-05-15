require("dotenv")
const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('../route/route.js')


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/contact', contactRoute)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
