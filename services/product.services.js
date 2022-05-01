const Product = require('../models/product.model');


exports.get = async (query) => {
    try {
        const product = await Product.find(query);
        return product;
    } catch (error) {
        return error;
    }
}

exports.getById = async (query) => {
    try {
        const product = await Product.findById(query);
        return product;
    } catch (error) {
        return error;
    }
}

exports.add = async (query) => {
    try {
       const newProduct = new Product({
           categoryId: query.categoryId,
           brandId: query.brandId,
           brandName: query.brandName,
           productImg: query.productImg,
           productName: query.productName,
           stockAmount: query.stockAmount,
           productTitle: query.productTitle,
           productDescription: query.productDescription,
           productComments: query.productComments,
           price: query.price
        });
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        return error;
    }
}

exports.update = async (query, productId) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {$set:query},
            {new:true}
        );
        return updatedProduct;
    } catch (error) {
        return error;
    }
}

exports.delete = async (query) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(query);
        return deletedProduct;
    } catch (error) {
        return error;
    }
}