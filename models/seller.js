const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    sellerName: {
        first: String,
        last: String
      }
})

const sellerModel = mongoose.model('seller', sellerSchema);

module.exports = sellerModel;