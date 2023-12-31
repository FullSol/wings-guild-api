const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:3000", "https://www.wingsguild.com"],
  credentials: true,
};

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const guildRouter = require("./routes/guild");
const newsRouter = require("./routes/news");
const raidRouter = require("./routes/raid");
const streamersRouter = require("./routes/streamers");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/guild", guildRouter);
app.use("/api/news", newsRouter);
app.use("/api/raid", raidRouter);
app.use("/api/streamers", streamersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
