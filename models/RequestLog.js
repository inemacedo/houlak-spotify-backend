module.exports = (sequelize, Model, DataTypes) => {
  class RequestLog extends Model {}

  RequestLog.init(
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
      modelName: "requestLog",
    },
  );

  return RequestLog;
};
