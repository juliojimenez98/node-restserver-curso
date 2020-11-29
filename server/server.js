require("./config/config");

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

//habilitar carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));
console.log(path.resolve(__dirname, "../public"));

app.use(bodyParser.urlencoded({ extended: false }), cors());

// parse application/json
app.use(bodyParser.json());

//configuracion global de rutas
app.use(require("./routes/index"));

mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.URLDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) throw err;

    console.log("Base de datos Online");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto", process.env.PORT);
});
