require("./models/funfacts.model");
require("./models/user.model");
require("./models/gameHistory.model");
const dbauthentication = require("./repository/db");

const startUp = async () => {
  dbauthentication.authenticateAndSyncDb();
};
module.exports = startUp;
