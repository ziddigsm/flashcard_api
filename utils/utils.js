const successJsonRespomse = (res, data, statusCode) => {
    return res.status(statusCode).json({data});
}

const errorJsonResponse = (res, message, statusCode) => {
    return res.status(statusCode).json({message});
}

const badRequestResponse = (res, message, statusCode) => {
    return res.status(statusCode).json({message});
}

module.exports = { successJsonRespomse, errorJsonResponse, badRequestResponse};