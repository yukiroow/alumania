//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()

//Cazandra Jae Lapig
router.get("/", (req, res) => {
    res.send("All Users")
})

//Cazandra Jae Lapig
router.post("/", (req, res) => {
    res.send("Create New Applicants")
})