const { Sequelize } = require("sequelize");

const { DB } = require("./config");

const sequelize = new Sequelize(DB.DB_NAME, DB.USERNAME, DB.PASSWORD, {
  dialect: "mysql",
  dialectOptions: {
    socketPath: `/cloudsql/${DB.CLOUD_SQL_CONNECTION_NAME}`,
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  operatorsAliases: false,
  define: {
    timestamps: false
  }
});

module.exports = {
  sequelize
};