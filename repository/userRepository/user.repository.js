const users = require("../../models/user.model");
const { sequelizeConn } = require("../db");

const createUser = async (name, uid, email) => {
  const [userData, created] = await users.findOrCreate({
    where: { uid },
    defaults: { name, email },
  });

  if (!created) {
    return { created: false, user: {} };
  }
  return { created: true, userData };
};

const getUserDetails = async (uid) => {
  return await users.findOne({
    where: { uid },
    attributes: ["name", "uid"],
  });
};

module.exports = { createUser, getUserDetails };
