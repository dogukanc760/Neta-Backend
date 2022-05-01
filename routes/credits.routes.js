const router = require('express').Router();

const CreditsController = require('../controller/credits.controller');

//http get
router.get('/', CreditsController.get);
router.get('/:id', CreditsController.getById);

//http post
router.post('/', CreditsController.add);

//http put
router.put('/:id', CreditsController.update);

//http delete
router.delete('/:id', CreditsController.delete);


module.exports = router;