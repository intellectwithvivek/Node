const express = require("express");
const cors = require("cors");
const app = express(),
  bodyParser = require("body-parser"),
  fs = require("fs");

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// migration of database
// db.sequelize.sync({ alter: true }).then(() => {
//   console.log("Migration of database has been done successfully!");
// });

//  drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const customCss = fs.readFileSync(process.cwd() + "/swagger.css", "utf8");

app.use(bodyParser.json());
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss })
);

// simple route
app.get("/api", (res) => {
  res.json({ message: "Welcome to application." });
});

require("./app/routes/users.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Yeah! Server is running on port :- ${PORT}.`);
});
