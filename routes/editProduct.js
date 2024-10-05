const express = require('express');
const { renderEditProduct, editProduct } = require('../Controller/productController');
const bodyParser = require('body-parser');

const router = express.Router();

// Middleware to parse URL-encoded and JSON data
router.use(bodyParser.urlencoded({})); // Allow nested objects
router.use(bodyParser.json()); // Parse JSON bodies

// Route to render the edit product form
router.get('/:id', renderEditProduct);

// Route to handle the form submission for editing a product
router.post('/:id', editProduct);


module.exports = router;