const router = require('express').Router();

const CardController = require('../controller/card.controller');


//http post
router.post('/:id', CardController.add);

//http get
router.get('/', CardController.get);
router.get('/:id', CardController.getById);
router.get('/get-one-by-user/:id', CardController.getByUserOne);
router.get('/get-all-by-user/:id', CardController.getByUserAll);


//http put 
router.put('/add-to-card/:userId/:cardId', CardController.addToCard);
router.put('/reduce-to-card/:userId/:cardId', CardController.reduceItem);
router.put('/discard-to-card/:userId/:cardId', CardController.discardProduct);
router.put('/update-card/:cardId', CardController.updateCard);


//http delete
router.put('/:id', CardController.deleteCard);


module.exports = router;