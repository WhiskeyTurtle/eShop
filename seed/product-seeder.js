var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '../images/website.jpg',
        title: 'Website Design',
        description: 'Full design and development',
        price: 50
    }),
    new Product({
        imagePath: '../images/payments.png',
        title: 'Accept Card Payments',
        description: 'Accept credit card payments',
        price: 10
    }),
    new Product({
        imagePath: '../images/website.jpg',
        title: 'Website Hosting',
        description: 'Fully managed site hosting using Amazon web services.',
        price: 15
    }),
    new Product({
        imagePath: '../images/website.jpg',
        title: 'eCommerce',
        description: 'Full design and development',
        price: 15
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
    
}

function exit() {
    mongoose.disconnect();
}