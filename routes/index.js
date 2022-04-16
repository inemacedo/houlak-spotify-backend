const apiRoutes = require("./apiRoutes");

module.exports = (app) => {
  app.use("/api", apiRoutes);
};
