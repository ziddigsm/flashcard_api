const flashCardRoutes = require("./flashCardsRoutes/flashCards.routes");
const funFactsRoutes = require("./funFactsRoutes/funFacts.routes");
const userRoutes = require("./userRoutes/user.routes");
const gameHistoryRoutes = require("./gameHistoryRoutes/gameHistory.routes");

const routes = (app) => {
  app.use("/api/flashcards", flashCardRoutes);
  app.use("/api/funfacts", funFactsRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/game_history", gameHistoryRoutes);
};

module.exports = routes;
