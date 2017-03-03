const dummyData = require('./dummyData.json');

module.exports = {
  generateRandomQuery() {
    const random = Math.random();
    const { ghentStations, otherStations, userAgents } = dummyData;
    const isGhentOrigin = random >= 0.5;
    const randomGhentStation = ghentStations[Math.floor(random*ghentStations.length)];
    const randomOtherStation = otherStations[Math.floor(random*otherStations.length)];
    const randomUserAgent = userAgents[Math.floor(random*userAgents.length)];

    return {
      origin: isGhentOrigin ? randomGhentStation : randomOtherStation,
      destination: isGhentOrigin ? randomOtherStation : randomGhentStation,
      querytime: new Date(),
      useragent: randomUserAgent
    };
  }
};
