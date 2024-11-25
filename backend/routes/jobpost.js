//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Cazandra Jae Lapig
router.get("/", (req, res) => {
 res.send("All Job Post")
 })

// Cariel Joyce Maga
router.get("/", (req, res) => {
    const query = 'SELECT * FROM interestedinjobpost';
    db.query(query, (err, result) => {
        if(err) return;
        res.send(result);
    })
})


module.exports = router;