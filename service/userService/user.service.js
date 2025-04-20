const userRepo = require("../../repository/userRepository/user.repository");

const createUserService = async (name, uid, email) => {
  return await userRepo.createUser(name, uid, email);
};

const getUserDetailsService = async (uid) => {
  return await userRepo.getUserDetails(uid);
};

module.exports = { createUserService, getUserDetailsService };
