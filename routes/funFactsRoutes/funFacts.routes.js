const express = require('express')
const router = express.Router();
const funFactsController = require('../../controllers/funFactsController/funFacts.controller')


router.get('/random_facts', funFactsController);

module.exports = router;