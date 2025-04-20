const express = require('express')
const router = express.Router();
const {getQuestionsController, validateTextController} = require('../../controllers/flashCardsController/flashCards.controller');

router.get('/questions', getQuestionsController);
router.post('/validate', validateTextController);

module.exports = router;