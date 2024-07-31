const express = require('express'); 
const router = express.Router();

const { getProducts } = require('../controllers/productController');
//const {getProduct} = require("../controllers/productController");

router.get('/', getProducts);
router.get('/product/:id', getProduct);

module.exports = router;