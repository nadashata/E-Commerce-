const express = require('express');
const adminRouter = require('./routes/adminRouter');
const sellerRouter = require('./routes/sellerRouter');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const cors =require('cors');

const app = express()

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/eCommerceDB', () => {
    console.log('connected to mongodb on port 27017');
})

app.use('/admin', adminRouter);
app.use('/seller', sellerRouter);

app.listen(3000, () => {
    console.log('started server on port 3000')
})


