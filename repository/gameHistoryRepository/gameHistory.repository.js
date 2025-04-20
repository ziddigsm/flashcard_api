const gameHistory = require("../../models/gameHistory.model");
const { sequelizeConn } = require("../db");

const createHistory = async (topic, score, questions_count, uid) => {
  return await gameHistory.create({
    topic,
    score,
    questions_count,
    uid,
  });
};

const getGameHistoryByUid = async (uid) => {
  return await gameHistory.findAll({
    where: { uid },
    order: [["id", "DESC"]],
  });
};

module.exports = { createHistory, getGameHistoryByUid };
