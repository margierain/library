const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = require('./server/routes');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://Maggie:assess@ds127983.mlab.com:27983/borrow')
app.use('/api/v1', router)


app.listen(port, () => {
  console.log(`API live at port ${port}`)
})