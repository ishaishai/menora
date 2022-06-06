const router = require("express").Router();
const apiController = require("../controllers/api.controller.js");


router.get("/init",apiController.init);
router.get("/search",apiController.search)

module.exports = router;