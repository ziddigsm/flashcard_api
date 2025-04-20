const funFacts = require("../../models/funfacts.model");
const { sequelizeConn } = require("../db");

const getRandomFunFacts = async () => {
  return await funFacts.findAll({
    order: sequelizeConn.random(),
    limit: 5,
  });
};

module.exports = { getRandomFunFacts };
