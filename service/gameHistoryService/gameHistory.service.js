const repo = require("../../repository/gameHistoryRepository/gameHistory.repository");

const createGameHistoryService = async (topic, score, questions_count, uid) => {
  return await repo.createHistory(topic, score, questions_count, uid);
};

const getGameHistoryService = async (uid) => {
  return await repo.getGameHistoryByUid(uid);
};


module.exports = { createGameHistoryService, getGameHistoryService };
