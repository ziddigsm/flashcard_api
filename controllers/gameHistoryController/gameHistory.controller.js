const {
  successJsonRespomse,
  errorJsonResponse,
  badRequestResponse,
} = require("../../utils/utils");
const gameHistoryService = require("../../service/gameHistoryService/gameHistory.service");

const createGameHistoryController = async (req, res) => {
  try {
    const { topic, score, questions_count, uid } = req.body;
    const isInvalidInput =
      typeof topic !== "string" ||
      typeof uid !== "string" ||
      !topic.trim() ||
      !uid.trim() ||
      typeof score !== "number" ||
      typeof questions_count !== "number" ||
      score > 15 ||
      questions_count > 15 ||
      score > questions_count;
    if (isInvalidInput)
      return badRequestResponse(
        res,
        { message: "Invalid Inputs. Please try again" },
        400
      );

    const result = await gameHistoryService.createGameHistoryService(
      topic,
      score,
      questions_count,
      uid
    );
    console.log(result);
    successJsonRespomse(res, result, 200);
  } catch (err) {
    errorJsonResponse(
      res,
      { message: err.message || "Internal Server Error. " },
      500
    );
  }
};

const getGameHistoryByUidController = async (req, res) => {
  try {
    const { uid } = req.query;
    if (!uid || !uid.trim()) {
      return badRequestResponse(
        res,
        { message: "Invalid Inputs. Please try again" },
        400
      );
    }
    const result = await gameHistoryService.getGameHistoryService(uid);
    successJsonRespomse(res, result, 200);
  } catch (err) {
    errorJsonResponse(
      res,
      { message: err.message || "Internal Server Error. " },
      500
    );
  }
};

module.exports = { createGameHistoryController, getGameHistoryByUidController };
