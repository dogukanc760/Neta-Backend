const router = require('express').Router();

const SettingController = require('../controller/setting.controller');

//http get
router.get('/', SettingController.get);

//http post 
router.post('/', SettingController.add);

//http put
router.put('/:id', SettingController.update);

module.exports = router;