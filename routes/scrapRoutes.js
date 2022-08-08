const express = require("express");
const { getConferencesResurchify,getSymposiumResurchify,getSeminarResurchify,getWorkshopResurchify } = require("../controllers/scrapperController");
const router = express.Router();


router.route("/conference").get(getConferencesResurchify);
router.route("/symposium").get(getSymposiumResurchify);
router.route("/seminar").get(getSeminarResurchify);
router.route("/workshop").get(getWorkshopResurchify);


module.exports = router