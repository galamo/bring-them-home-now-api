const express = require("express");
const bringThemHomeNow = require("bring-them-home-now");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Health check");
});

app.get("/hostages", (req, res, next) => {
  const name = req.query.name;
  const age = Number(req.query.age);
  if (name) {
    res.json(bringThemHomeNow.searchByName(name));
  } else if (age) {
    res.json(bringThemHomeNow.searchByLowerAge(age));
  } else {
    res.json(bringThemHomeNow.data);
  }
});

app.get("/hostages/idf", (req, res, next) => {
  res.json(bringThemHomeNow.getIDFHostages());
});

app.listen(8080, () => {
  console.log(`Server is listenning to Port ${8080}`);
});
