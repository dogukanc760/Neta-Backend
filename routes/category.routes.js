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
router.put('/:id', CategoryController.deleteCategory);




//------------ Category Sub ------------

//http get
router.get('/get-sub-all', CategoryController.getSubCategory);
router.get('/get-by-main/:id', CategoryController.getSubsByMain);

//http post
router.post('/add-sub/:id', CategoryController.addSub);

//http delete
router.delete('/delete-sub/:id', CategoryController.deleteSub);

//http put
router.put('/update-sub/:id', CategoryController.updateSub);


module.exports = router;