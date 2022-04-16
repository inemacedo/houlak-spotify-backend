require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
