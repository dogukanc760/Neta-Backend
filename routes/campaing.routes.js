const router = require("express").Router();

const CampaingController = require("../controller/campaing.controller");

//http post campaing
router.post("/", CampaingController.add);

//http put campaing
router.put("/:id", CampaingController.update);

//http delete campaing
router.put("/:id", CampaingController.delete);

//http get campaing
router.get("/", CampaingController.get);
router.get("/:id", CampaingController.getById);
router.get("/:query", CampaingController.getByQuery);

//http get content
router.get("/content", CampaingController.getContent);
router.get("/content/:id", CampaingController.getContentById);
router.get(
  "/content/by-campaing/:query",
  CampaingController.getContentByCampaing
);

//http post content
router.post("/content/:id/:productId", CampaingController.addContent);

//http put content
router.put("/content/:id", CampaingController.updateContent);

//http delete content
router.delete("/content/:id", CampaingController.deleteContent);


module.exports = router;