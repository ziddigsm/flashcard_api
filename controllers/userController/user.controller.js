const {
  createUserService,
  getUserDetailsService,
} = require("../../service/userService/user.service");
const {
  errorJsonResponse,
  successJsonRespomse,
  badRequestResponse,
} = require("../../utils/utils");
const validator = require("validator");

const createUserController = async (req, res) => {
  try {
    const { name, uid, email } = req.body;
    if (!name || !validator.isAlpha(name.replace(/\s/g, ""))) {
      return errorJsonResponse(
        res,
        { message: "Name is required and only in letters." },
        400
      );
    }
    if (!uid.trim() || !email.trim())
      return errorJsonResponse(res, { message: "Invalid Inputs" }, 400);
    console.log(name, email, uid);
    const result = await createUserService(name, uid, email);
    if (result.created) {
      successJsonRespomse(res, result, 201);
    } else {
      successJsonRespomse(res, result, 409);
    }
  } catch (err) {
    errorJsonResponse(
      res,
      { message: err.message || "Internal Server Error. Please try  again." },
      500
    );
  }
};

const getUserDetailsController = async (req, res) => {
  try {
    const { uid } = req.query;
    if (!uid || !uid.trim() || !validator.isAlphanumeric(uid))
      return badRequestResponse(res, { message: "Invalid Inputs." }, 400);

    const result = await getUserDetailsService(uid);
    successJsonRespomse(res, result, 200);
  } catch (err) {
    errorJsonResponse(
      res,
      { message: err.message || "Internal Server Error. Please try  again." },
      500
    );
  }
};

module.exports = { createUserController, getUserDetailsController };
