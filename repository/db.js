const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelizeConn = new Sequelize(
  process.env.dbName,
  process.env.user,
  process.env.password,
  {
    host: process.env.server,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const authenticateAndSyncDb = async () => {
  try {
    await sequelizeConn.authenticate();
    //await sequelizeConn.sync({ alter: true });
    console.log("DB Authentication Successful");
  } catch (err) {
    console.error(err.message || "Db authentication failed");
    process.exit(1);
  }
};

module.exports = { sequelizeConn, authenticateAndSyncDb };
