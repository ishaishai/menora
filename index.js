require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const apiRoutes = require("./routes/api.routes");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("server is listening on port ", PORT);
});