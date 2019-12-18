var express = require("express");
var router = express.Router();

var Product = require("../models/product");

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 8; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render("homepage/index", {
      title: "SKYPHONE",
      products: productChunks
    });
  });
});

router.get("/collections/iphone-quoc-te", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    var docs1= [];
    for (var i = 0; i< docs.length; i++){
      if (docs[i].model == 'iphone'){
        docs1.push(docs[i]);
      }
    }
    for (var i = 0; i < docs1.length; i += chunkSize) {
      
      productChunks.push(docs1.slice(i, i + chunkSize));
    }
    res.render("homepage/category", { products: productChunks });
  });
});

router.get("/collections/dien-thoai-android", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    var docs1= [];
    for (var i = 0; i< docs.length; i++){
      if (docs[i].model == 'android'){
        docs1.push(docs[i]);
      }
    }
    for (var i = 0; i < docs1.length; i += chunkSize) {
      
      productChunks.push(docs1.slice(i, i + chunkSize));
    }
    res.render("homepage/category", { products: productChunks });
  });
});

router.get("/collections/may-tinh-bang", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    var docs1= [];
    for (var i = 0; i< docs.length; i++){
      if (docs[i].model == 'table'){
        docs1.push(docs[i]);
      }
    }
    for (var i = 0; i < docs1.length; i += chunkSize) {
      
      productChunks.push(docs1.slice(i, i + chunkSize));
    }
    res.render("homepage/category", { products: productChunks });
  });
});

router.get("/collections/dong-ho", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    var docs1= [];
    for (var i = 0; i< docs.length; i++){
      if (docs[i].model == 'watch'){
        docs1.push(docs[i]);
      }
    }
    for (var i = 0; i < docs1.length; i += chunkSize) {
      
      productChunks.push(docs1.slice(i, i + chunkSize));
    }
    res.render("homepage/category", { products: productChunks });
  });
});

router.get("/collections/phu-kien", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    var docs1= [];
    for (var i = 0; i< docs.length; i++){
      if (docs[i].model == 'accessories'){
        docs1.push(docs[i]);
      }
    }
    for (var i = 0; i < docs1.length; i += chunkSize) {
      
      productChunks.push(docs1.slice(i, i + chunkSize));
    }
    res.render("homepage/category", { products: productChunks });
  });
});

router.get("/collections/loa-va-tai-nghe", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    var docs1= [];
    for (var i = 0; i< docs.length; i++){
      if (docs[i].model == 'speaker'){
        docs1.push(docs[i]);
      }
    }
    for (var i = 0; i < docs1.length; i += chunkSize) {
      
      productChunks.push(docs1.slice(i, i + chunkSize));
    }
    res.render("homepage/category", { products: productChunks });
  });
});

module.exports = router;
