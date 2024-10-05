const express =require("express");
const { renderProducts } = require("../Controller/productController");
const router = express.Router();

router.get('/',renderProducts);

module.exports = router;