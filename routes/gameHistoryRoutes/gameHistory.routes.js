const express = require("express");
const router = express.Router();
const {
  createGameHistoryController,
  getGameHistoryByUidController,
} = require("../../controllers/gameHistoryController/gameHistory.controller");

router.post("/set_game_history", createGameHistoryController);
router.get("/game_history_by_id", getGameHistoryByUidController);

module.exports = router;
