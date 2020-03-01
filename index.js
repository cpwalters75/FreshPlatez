//We're using the express framework and the mailgun-js wrapper
const express = require("express");
const dotenv = require('dotenv').config();
const routes = require('./routes');
const db = require('./models');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;




//Tell express to fetch files from the /js directory
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/", routes);

//We're using the Jade templating language because it's fast and neat
app.set("view engine", "jade");

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT} and process is PID ${process.pid}`);
    });
  });
  