const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({  
    productName:        {type:String,required:true},
    categoryName:       {type:mongoose.Schema.Types.ObjectId,ref:'category'},
    productDescription: {type:String,required:true},
    productPrice:       {type:Number,required:true,default:0},
    productImage:       {type:String,required:true},
    availablePieces:    {type:Number,required:true,default:0},
    // sellerId:           {type:mongoose.Schema.Types.ObjectId,ref:'seller'},
    // subCategoryId:      {type:mongoose.Schema.Types.ObjectId,ref:'subCategory'},
});

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;