//Lapig & Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get all albums of a user
router.get("/albums/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM album WHERE ownerid = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("nothing");
        }
    });
});

// Get all experiences of a user
router.get("/all/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT e.xpid, e.body, GROUP_CONCAT(i.xpimage) AS images FROM experience e LEFT JOIN experienceimage i ON e.xpid = i.xpid WHERE e.userid = 'U008' GROUP BY e.xpid, e.body;`,
        [id],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }

            const formattedResults = results.map((row) => ({
                ...row,
                images: row.images ? row.images.split(",") : [],
            }));

            res.status(200).json(formattedResults);
        }
    );
});

// Get all Experience
router.get("/", (req, res) => {
    db.query("SELECT * FROM experience", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length > 1) {
            res.status(200).json(results);
        } else {
            res.status(404).send("nothing");
        }
    });
});

// Get All Comments from an experience
router.get("/comment/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT DISTINCT cm.commid, cm.content, usr.username, al.displaypic FROM comment as cm INNER JOIN user as usr using (userid) INNER JOIN alumni as al LEFT JOIN experience using(xpid) WHERE cm.xpid = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 1) {
                res.status(200).json(results);
            } else {
                res.status(404).send("nothing");
            }
        }
    );
});

// Get All Experience in Album
router.get("/albumexperience/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT xpid, title, body, publishtimestamp, username, xpimage FROM experience INNER JOIN albumexperience USING(xpid) INNER JOIN experienceimage USING(xpid) INNER JOIN user USING(userid) WHERE albumid = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 1) {
                res.status(200).json(results);
            } else {
                res.status(404).send("nothing");
            }
        }
    );
});

// Get all Experience Like
router.get("/allexperiencelike/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT COUNT(userid) FROM experiencelike WHERE xpid = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 1) {
                res.status(200).json(results);
            } else {
                res.status(404).send("nothing");
            }
        }
    );
});

// Create a new Experience
router.post("/new", upload.array("images"), (req, res) => {
    const { content, albumid, userid } = req.body;
    try {
        // 1. Generate new XPID
        db.query("SELECT COUNT(*) AS count FROM experience", (err, results) => {
            if (err) {
                console.log(err);
            }
            let result = results[0].count;

            const nextID = `XP${String(result + 1).padStart(3, "0")}`; // e.g., XP001, XP002

            // 2. Insert into `experience` table
            db.query(
                "INSERT INTO experience (xpid, body, userid) VALUES (?, ?, ?)",
                [nextID, content, userid],
                (err) => {
                    if (err) {
                        console.log(err);
                    }

                    // 3. Insert each image into `experienceimage` table
                    req.files.map((file) =>
                        db.query(
                            "INSERT INTO experienceimage (xpid, xpimage) VALUES (?, ?)",
                            [
                                nextID,
                                file.buffer, // `buffer` contains the image data in binary form
                            ],
                            (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            }
                        )
                    );

                    // 4. Insert into `albumexperience` if `albumid` is provided
                    if (albumid) {
                        db.query(
                            "INSERT INTO albumexperience (albumid, xpid) VALUES (?, ?)",
                            [albumid, nextID],
                            (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            }
                        );
                    }
                }
            );
        });

        res.status(200).json({ message: "Experience created successfully!" });
    } catch (error) {
        console.error("Error creating experience:", error);
        res.status(500).json({
            message: "Failed to create experience.",
            error: error.message,
        });
    }
});

// Add like to a post
// To be fixed
router.post("/likepost", (req, res) => {
    const { xpid, userid } = req.body;
    const liketimestamp = new Date().getTime();
    db.query(
        "INSERT INTO experiencelike (xpid, userid, liketimestamp) VALUES (?, ?, ?)",
        [xpid, userid, liketimestamp],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ xpid, userid, liketimestamp });
        }
    );
});

// CJM
// Add comment to post
router.post("/comment", (req, res) => {
    const { commid, content, xpid, userid } = req.body;
    const publishtimestamp = new Date().getTime;
    db.query(
        "INSERT INTO comment (commid, content, xpid, userid) VALUES (?, ?, ?, ?)",
        [commid, content, xpid, userid],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({
                id: result.insertId,
                content,
                publishtimestamp,
                xpid,
                userid,
            });
        }
    );
});

//Cazandra Jae Lapig
// Create a New Album
router.post("/album", (req, res) => {
    // TODO: Album image
    const { title, coverphoto, ownerid, albumid } = req.body;
    db.query(
        "INSERT INTO album (title, coverphoto, ownerid, albumid) VALUES (?, ?, ?, ?)",
        [title, coverphoto, ownerid],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({
                id: result.insertId,
                title,
                coverphoto,
                albumid,
            });
        }
    );
});

//Cazandra Jae Lapig
router.post("/albumexperience", (req, res) => {
    // TODO: Add a post to an Album
    res.send("Add a post to an Album");
});

// Delete an Experience
router.delete("/removexperience/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM experience WHERE xpid = ?", [id], (err, result) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            return res.status(400).send("error");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("not found");
        }
        res.status(200).send("success");
    });
});

// Delete Album
router.delete("/removealbum/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM album WHERE albumid = ?", [id], (err, result) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            return res.status(400).send("Error deleting album");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("Album not found");
        }
        res.status(200).send("success");
    });
});

module.exports = router;
