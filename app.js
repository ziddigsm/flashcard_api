const express = require("express");
const routes = require("./routes/routes");

const corsMiddleWare = require("./middleware/corsMiddleWare");
const startUp = require("./startup");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(corsMiddleWare);

const port = process.env.PORT;

routes(app);
startUp();

app.listen(port, () => {
  console.log("Listening on port: ", process.env.PORT || 4500);
});

module.exports = app;
