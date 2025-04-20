const { DataTypes, TIME } = require("sequelize");
const { sequelizeConn } = require("../repository/db");
const Users = require("./user.model");

const Game_History = sequelizeConn.define(
  "game_history",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    questions_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Users,
        key: "uid",
      },
    },
  },
  {
    tableName: "game_history",
    timestamps: false,
  }
);

module.exports = Game_History;
