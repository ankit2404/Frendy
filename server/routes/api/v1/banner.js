const express = require("express");
const router = express.Router();
const bannerController = require("../../../controllers/api/banner-controller");

router.get("/", function (req, res) {
  return res.end("hello this is Bond");
});
router.post("/create", bannerController.banner_create);
router.post(
  "/create-img",
  bannerController.uploadUserPhoto,
  bannerController.resizeUserPhoto,
  bannerController.banner_create_image
);
router.get("/show", bannerController.banner_list);

module.exports = router;
