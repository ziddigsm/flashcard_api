const { DataTypes, TIME } = require("sequelize");
const { sequelizeConn } = require("../repository/db");

const Fun_Facts = sequelizeConn.define(
  "Fun_Facts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fact: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    created_on: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "fun_facts",
    timestamps: false,
  }
);

module.exports = Fun_Facts;
