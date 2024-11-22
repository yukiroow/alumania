const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "orange", "kiwi"] });
});

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});

// TODO: https://daisyui.com/components/alert/
