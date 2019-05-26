const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    subCategoryName: {type:String,required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'category'},
})

const subCategoryModel = mongoose.model('subCategory', subCategorySchema);

module.exports = subCategoryModel;