const express = require('express')
const productModel = require('../models/product');
const categoryModel = require('../models/category');
const subCategoryModel = require('../models/subCategory');

const router = express.Router();

router.route("/categories").get((req, res) => {
    categoryModel.find((err, categories) => {
        if (err)
            console.log(err);
        else
            res.json(categories);
    });
});

router.route("/category/:id").get((req, res) => {
    categoryModel.findById(req.params.id, (err, categories) => {
        if (err)
            console.log(err);
        else
            res.json(categories);
    });
});

////////////////////////////////////////////////////////////////////////////////
router.route("/subCategories").get((req, res) => {
    subCategoryModel.find((err, subCategories) => {
        if (err)
            console.log(err);
        else
            res.json(subCategories);
    });
});

router.route("/subCategory/:id").get((req, res) => {
    subCategoryModel.findById(req.params.id, (err, subCategories) => {
        if (err)
            console.log(err);
        else
            res.json(subCategories);
    });
});

////////////////////////////////////////////////////////////////////////////////
router.route("/newProduct").post((req, res) => {
    console.log(req.body)
    let product = new productModel(req.body);
    product.save()
        .then(product => {
            res.status(200).json({ 'product': 'added successfully' });
        })
        .catch(err => {
            res.status(400).send('failed saving');
        });
});

router.route("/products").get((req, res) => {
    productModel.find((err, products) => {
        if (err)
            console.log(err);
        else
            res.json(products);
    });
});

router.route("/product/:id").get((req, res) => {
    productModel.findById(req.params.id, (err, products) => {
        if (err)
            console.log(err);
        else
            res.json(products);
    });
});

router.route("/editProduct/:id").post((req, res) => {
    productModel.findById(req.params.id, (err, product) => {
        if (!product)
            return next(new Error("couldnot load document"));
        else {
            product.productName = req.body.productName;
            product.categoryName = req.body.categoryName;
            product.productImage = req.body.productImage;
            product.productPrice = req.body.productPrice;
            product.availablePieces = req.body.availablePieces;
            product.productDescription = req.body.productDescription;
            product.save()
                .then(product => {
                    res.json('updatedone');
                })
                .catch(err => {
                    res.status(400).send('failed');
                });
        }
    });
});

router.route('/deleteProduct/:id').get((req, res) => {
    productModel.findByIdAndRemove(req.params.id, (err, product) => {
        if (err)
            res.json(err);
        else
            res.json("removed Successfully");

    });
});

module.exports = router;
