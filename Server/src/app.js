const express = require('express');
const app = express(); 
require('dotenv').config();
const cors = require('cors');


require('./startup/db')()
require('./startup/routes')(app)

app.use(cors());

app.listen('9000', () => console.log('Server on 9000'));