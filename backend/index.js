const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const connectWithMongodb = require("./config/db");
require("dotenv").config();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// logger
app.use(morgan("tiny"));
// app.use(cookieParser(process.env.JWT_SECRET_REFRESH_TOKEN))

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

// connection with mongodb database
connectWithMongodb();

app.get("/", (req, res) => {
  res.send("app is working");
});

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/todo", require("./routes/todoRoutes"));

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
