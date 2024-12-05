const express = require("express")
const PlayerController = require("../controllers/PlayerController")
const router = express.Router()

router.get("/getPostById/:_id", PlayerController.getPlayerById)
router.get("/getPlayerByName/:short_name", PlayerController.getPlayerByName)
router.get("/getAllInfo", PlayerController.getAllInfo)
router.get("/getTenHighestPaid", PlayerController.getTenHighestPaid)

module.exports = router
