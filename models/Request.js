module.exports = (sequelize, Model, DataTypes) => {
  class Request extends Model {}

  Request.init(
    {
      ip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artistSearched: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "request",
    },
  );

  return Request;
};
