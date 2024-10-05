const express = require("express");
const { renderAddProduct, postAddProduct } = require("../Controller/productController");

// You don't need to require body-parser separately, as Express has built-in support
const router = express.Router();

// Use built-in body parser middleware for parsing URL-encoded data
router.use(express.urlencoded({ extended: true }));

// Render the add-product form
router.get('/', renderAddProduct);

// Handle form submission and add the product
router.post('/', postAddProduct);

module.exports = router;
