
const express = require("express");
const dotenv = require('dotenv').config();
const routes = require('./routes');
const db = require('./models');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/", routes);


// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT} and process is PID ${process.pid}`);
    });
  });
  