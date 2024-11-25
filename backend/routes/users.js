//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("All Users")
})

router.post("/", (req, res) => {
    res.send("Create New Applicants")
})