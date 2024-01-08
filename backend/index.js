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


const allowedDomains = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5174",
  "http://localhost:5173",
  "http://localhost:5175",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedDomains.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    // origin: "https://www.drivado.com",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
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
const PORT = process.env.PORT || 6300;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
