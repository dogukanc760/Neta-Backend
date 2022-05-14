const router =  require('express').Router();

const CategoryController = require('../controller/category.controller');


// ------------- Category Main --------------  

//http get 
router.get('/', CategoryController.getCategory);
router.get('/:id', CategoryController.getCategoryById);

//http post 
router.post('/', CategoryController.addCategory);


//http put 
router.put('/:id', CategoryController.updateCategory);


//http delete 
router.delete('/:id', CategoryController.deleteCategory);




//------------ Category Sub ------------

//http get
router.get('/sub/get-sub-all', CategoryController.getSubCategory);
router.get('/sub/get-by-main/:id', CategoryController.getSubsByMain);

//http post
router.post('/sub/add-sub/:id', CategoryController.addSub);

//http delete
router.delete('/sub/delete-sub/:id', CategoryController.deleteSub);

//http put
router.put('/sub/update-sub/:id', CategoryController.updateSub);


module.exports = router;