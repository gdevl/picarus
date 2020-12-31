const cors = require("cors");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const logger = require("morgan");
const csurf = require("csurf");
const routes = require("./routes");
const environment = require("./config");
let isProduction = environment === "production";

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Security Middleware

// const whitelist = ["http://localhost:3000", "https://picarus.herokuapp.com"];

// const corsOptions = {
//   credentials: true, // important
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       return callback(null, true);
//     }
//     callback(new Error("Not allowed by CORS"));
//   },
// };

if (!isProduction) {
  app.use(cors());
}

app.use(helmet({ hsts: false, contentSecurityPolicy: false }));
// app.use(csurf({
//   cookie: {
//     // secure: process.env.NODE_ENV === 'production',
//     secure: isProduction,
//     // sameSite: process.env.NODE_ENV === 'production',
//     sameSite: isProduction && 'Lax',
//     httpOnly: true
//   }
// }));

app.use(routes);

// Serve React Application
// This should come after routes, but before 404 and error handling.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set("WWW-Authenticate", "Bearer");
  }
  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
  });
});

module.exports = app;
