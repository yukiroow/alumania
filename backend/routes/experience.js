//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Get all Experience
router.get("/", (req, res) => {
    db.query("SELECT * FROM experience", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Get All Comment
router.get("/comment", (req, res) => {
    db.query("SELECT * FROM comment", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Get All Experience in Album
router.get("/albumexperience", (req, res) => {
    db.query("SELECT * FROM albumexperience", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Cariel Joyce Maga
router.post("/", (req, res) => {
    res.send("Add experience image")
})

// Get all Experience Like
router.get("/allexperiencelike", (req, res) => {
    db.query("SELECT * FROM experiencelike", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Create a new Experience
router.post("/createnewexperience", (req, res) => {
    const { title, body, userid, xpimage, xpid } = req.body;
    db.query('INSERT INTO experience (title, body, userid) VALUES (?, ?, ?)', [title, body, userid], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, title, body });
    });
    db.query('INSERT INTO experienceimage (xpimage, xpid) VALUES (?, ?)', [xpimage, xpid], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, xpimage, xpid });
    });
})

// Add like to a post
// To be fixed 
router.post("/experiencelike", (req, res) => {
    const { xpid, userid } = req.body;
    const liketimestamp = new Date().getTime; 
    db.query('INSERT INTO experiencelike (xpid, userid, liketimestamp) VALUES (?, ?, ?)', [xpid, userid, liketimestamp], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ xpid, userid, liketimestamp });
    });
})

// CJM
// Add comment to post 
router.post("/comment", (req, res) => {
    const { commid, content, xpid, userid } = req.body;
    const publishtimestamp = new Date().getTime; 
    db.query('INSERT INTO comment (commid, content, xpid, userid) VALUES (?, ?, ?, ?)', [commid, content, xpid, userid], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, content, publishtimestamp, xpid, userid });
    });
})


//Cazandra Jae Lapig
// Create a New Album
router.post("/album", (req, res) => {
    const { title, coverphoto, ownerid, albumid } = req.body;
    db.query('INSERT INTO album (title, coverphoto, ownerid, albumid) VALUES (?, ?, ?, ?)', [title, coverphoto, ownerid], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, title, coverphoto, albumid });
    });
})

//Cazandra Jae Lapig
router.post("/albumexperience", (req, res) => {
    res.send("Add a post to an Album")
})

// Delete an Experience
router.delete('/removexperience', (req, res) => {
    const xpid = req.params.id; 
    db.query('DELETE FROM experience WHERE xpid = ?', [xpid], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(400).send('Error deleting experience');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Experience not found');
        }
        res.send('Experience deleted successfully');
    });
});

// Cariel Joyce Maga
// Delete Album 
router.delete("/removealbum", (req, res) => {
    const albumid = req.params.id; 
    db.query('DELETE FROM album WHERE albumid = ?', [albumid], (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(400).send('Error deleting album');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Album not found');
        }
        res.send('Album deleted successfully');
    });
});

module.exports = router;