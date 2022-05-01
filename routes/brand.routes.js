const router = require("express").Router();

const BrandController = require("../controller/brand.controller");

//http get
//all brands
router.get("/", BrandController.getAllBrand);
//get by id
router.get("/:id", BrandController.getBrand);

//get by name
router.get("/get-by-query/:query", BrandController.getBrandsByQuery);

//http post
router.post("/", BrandController.addBrand);

//http put
router.put("/:id", BrandController.updateBrand);

//http delete
router.delete("/:id", BrandController.deleteBrands);

module.exports = router;
