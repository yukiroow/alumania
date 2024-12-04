//Lapig & Maga
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

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

// authRouter
app.use("/auth", authRouter);
app.use("/login", authRouter);

// eventRouter
app.use("/events", eventRouter)
app.use("/interestedinevents", eventRouter)

// experienceRouter
app.use("/experiences", experienceRouter)
app.use("/albumexperience/:id", experienceRouter)
app.use("/comment/:id", experienceRouter)
app.use("/removexperience/:id", experienceRouter)
app.use("/removealbum/:id", experienceRouter)
app.use("/new", experienceRouter)
app.use("/album", experienceRouter)
app.use("/likepost", experienceRouter)
app.use("/allexperiencelike/:id", experienceRouter)

// userRouter
app.use("/users", userRouter)
app.use("/alumni", userRouter)
app.use("/editalumni", userRouter)
app.use("/applicants", userRouter)

// jobRouter
app.use("/jobposts", jobRouter)
app.use("/interested/:id", jobRouter)

// Search
app.use("/search", searchRouter);
app.use("/events/:query", searchRouter);
app.use("/experiences/:query", searchRouter);
app.use("/albums/:query", searchRouter);
app.use("/users/:query", searchRouter);
app.use("/opportunities/:query", searchRouter);

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});