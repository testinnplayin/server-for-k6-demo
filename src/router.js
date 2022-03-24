const { THINGAMABOB_COLLECTION_NAME } = require('./constants');

async function getRoutes (fastify, _opts) {
  fastify.get('/', async (_req, _res) => {
    return {
      message: 'Hello!'
    };
  });

  fastify.get('/thingamabob', async (req, res) => {
    const thingamabobCollection = fastify.mongo.db.collection(THINGAMABOB_COLLECTION_NAME);

    const thingamabob = await thingamabobCollection.findOne();

    if (!thingamabob) {
      throw new Error('Invalid request');
    }

    return thingamabob;
  });
}

module.exports = getRoutes;
