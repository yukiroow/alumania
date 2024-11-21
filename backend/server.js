const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({
        "name":"sean",
        "type":"****kol",
    });
});

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});

// TODO: https://daisyui.com/components/alert/
