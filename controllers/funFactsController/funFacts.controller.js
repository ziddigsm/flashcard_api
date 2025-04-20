const funFactsService = require('../../service/funFactsService/funFacts.service');
const {successJsonRespomse, errorJsonResponse, badRequestResponse} = require('../../utils/utils')

const funFactsController = async (req, res) => {
    try {
        const result = await funFactsService();
    successJsonRespomse(res, result, 200);

    }
    catch (err) {
        errorJsonResponse(res, {message: err.message || 'Internal Server Error. Please try again.'}, 500);
    }
}

module.exports = funFactsController;