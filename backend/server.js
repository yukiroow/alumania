// Author: @yukiroow Harry Dominguez
//         @blueskatchy Cazandra Jae Lapig
//         @cayeelii Cariel Joyce Maga
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// CORS policy
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Route Imports
const eventRouter = require("./routes/events");
const userRouter = require("./routes/users");
const experienceRouter = require("./routes/experiences");
const jobRouter = require("./routes/jobposts");
const authRouter = require("./routes/auth");
const searchRouter = require("./routes/search");

// Routes
app.use("/auth", authRouter);
app.use("/events", eventRouter);
app.use("/experiences", experienceRouter);
app.use("/users", userRouter);
app.use("/jobposts", jobRouter);
app.use("/search", searchRouter);

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});
