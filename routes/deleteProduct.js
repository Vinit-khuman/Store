const express = require("express");
const { deleteProduct } = require("../Controller/productController");
const router = express.Router();

// Use DELETE method for deleting a product
router.get('/:id',deleteProduct);

module.exports = router;
