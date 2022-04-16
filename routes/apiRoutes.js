const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");

apiRouter.get("/albums", apiController.getAlbums);

module.exports = apiRouter;
