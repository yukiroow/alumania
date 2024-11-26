//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Cazandra Jae Lapig
router.get("/", (req, res) => {
    db.query("SELECT * FROM experience", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Cariel Joyce Maga
router.get("/", (req, res) => {
    const query = 'SELECT * FROM comment';
    db.query(query, (err, result) => {
        if(err) return;
        res.send(result);
    })
})

// Cariel Joyce Maga
router.get("/", (req, res) => {
    res.send("Experience in Album")
})

// Cariel Joyce Maga
router.post("/", (req, res) => {
    res.send("Add experience image")
})

// Cazandra Jae Lapig
// Check query
router.get("/allexperiencelike", (req, res) => {
    db.query("SELECT * FROM experience", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);

        //userid
    });
})

//Cazandra Jae Lapig
router.post("/experience", (req, res) => {
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
router.post("/album", (req, res) => {
    res.send("Create New Album")
})

//Cazandra Jae Lapig
router.post("/albumexperience", (req, res) => {
    res.send("Add a post to an Album")
})

//Cazandra Jae Lapig 
// MALI I2
router.delete('/removexperience', (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM user WHERE id = ?', [userId], (err, result) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        res.status(400).send('Error deleting user');
        return;
      }
      res.send('User deleted successfully');
    });
})

// Cariel Joyce Maga
router.delete("/", (req, res) => {
    res.send("Delete Album")
})

module.exports = router;