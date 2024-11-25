//Cazandra Jae Lapig
const express = require("express")
const router = express.Router()
const db = require("../database").db;

//Cazandra Jae Lapig
router.get("/", (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

//Cazandra Jae Lapig
router.post("/applicants", (req, res) => {
    res.send("Create New Applicants")
})

// Cariel Joyce Maga
router.put("/", (req, res) => {
    res.send("Edit Alumni")
})

module.exports = router;
