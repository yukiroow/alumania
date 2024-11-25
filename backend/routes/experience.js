//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()

// Cariel Joyce Maga
router.get("/", (req, res) => {
    res.send("Comments in Experience")
})

// Cazandra Jae Lapig
router.get("/", (req, res) => {
    res.send("All Experience")
})

// Cazandra Jae Lapig
router.get("/", (req, res) => {
    res.send("All Likes for an Experience")
})

//Cazandra Jae Lapig
router.post("/", (req, res) => {
    res.send("Create New Experience")
})

//Cazandra Jae Lapig
router.post("/", (req, res) => {
    res.send("Create New Album")
})

//Cazandra Jae Lapig
router.post("/", (req, res) => {
    res.send("Add a post to an Album")
})

router.delete('/', (req, res) => {
    res.send("Delete Experience")
})
