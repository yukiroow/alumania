//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()

// Cariel Joyce Maga
router.get("/", (req, res) => {
    res.send("Interested in Event")
})

// Cazandra Jae Lapig
router.get("/", (req, res) => {
    res.send("All  Event")
})

module.exports = router;