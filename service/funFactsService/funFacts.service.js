const repo = require('../../repository/funFactsRepository/funFacts.repository')

const funFactsService = async () => {
   const factsArray = []
    const facts = await repo.getRandomFunFacts();
    facts.forEach(fact => {
        factsArray.push(fact.dataValues.fact);
    })
    return factsArray;
}

module.exports = funFactsService;