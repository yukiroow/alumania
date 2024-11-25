//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()
const db = require('../database').db;

//Cazandra Jae Lapig
router.get("/", (req, res) => {
    res.send("All Users")
})

//Cazandra Jae Lapig
router.post("/applicants", (req, res) => {
    res.send("Create New Applicants")
})

// Cariel Joyce Maga
router.put("/", (req, res) => {
    res.send("Edit Alumni")
})

module.exports = router;
