const {getQuestionsService, textValidatorService} = require('../../service/flashCardsService/flashCards.service');
const {textValidator, successJsonRespomse, errorJsonResponse, badRequestResponse} = require('../../utils/utils')


const getQuestionsController = async (req, res) => {
    try {
        let {topic, questionsCount} = req.query;
        questionsCount = Number(questionsCount);

        if (topic && questionsCount && (typeof(topic) === 'string' && topic.length <= 50) && (typeof(questionsCount) === 'number' && questionsCount <= 15)){
                let result = await getQuestionsService(topic, questionsCount);
                if (result.message) {
                    errorJsonResponse(res, result, 500);
                }
                successJsonRespomse(res, result, 200)
        }   

    else {
        badRequestResponse(res, "Invalid request body. Please try again.", 400);
    }
    }
    catch(err) {
        errorJsonResponse(res,  err.message || "Internal Server Error. Please try again later.", 500);
    }
}

const validateTextController = async(req, res) => {
    try{
        let {topic} = req.body;
        const validity = await textValidatorService(topic.trim());
        if(validity.isValid) {
            successJsonRespomse(res, validity, 200);
        }
        else {
            badRequestResponse(res, validity, 400);
        }
    }
    catch (err) {
        errorJsonResponse(res, err.message || "Internal Server Error. Please try again later.", 500);
    }
}

module.exports = {getQuestionsController, validateTextController};