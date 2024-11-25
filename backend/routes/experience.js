//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()

// Cariel Joyce Maga
router.get("/", (req, res) => {
    res.send("Comments in Experience")
})

// Cariel Joyce Maga
router.post("/", (req, res) => {
    res.send("Add experience image")
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

// Cariel Joyce Maga
router.post("/", (req, res) => {
    res.send("Add like to a post")
})

// Cariel Joyce Maga
router.post("/", (req, res) => {
    res.send("Add comment to a post")
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

// Cariel Joyce Maga
router.delete("/", (req, res) => {
    res.send("Delete Album")
})

module.exports = router;