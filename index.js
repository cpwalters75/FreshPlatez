const express = require("express");
require("dotenv").config();
const routes = require("./routes");
const db = require("./models");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files from the Vue app build directory
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(cors());

app.use("/", routes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});


app.use(function (err, req, res, next) {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "Only images are allowed" });
    return
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(422).json({ error: "Too large. Max size is 2MB" })
    return
  }
})


// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT} and process is PID ${process.pid}`);
  });
});
