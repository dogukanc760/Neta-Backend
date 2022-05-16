const router = require('express').Router();

const ProductController = require('../controller/product.controller');


//http get
router.get('/', ProductController.get);
router.get('/:id', ProductController.getById);
router.get('/get-by-category/:categoryId', ProductController.getByCategory)

//http post
router.post('/', ProductController.add);

//http put
router.put('/:id', ProductController.update);

//http delete
router.delete('/:id', ProductController.delete);

module.exports = router;