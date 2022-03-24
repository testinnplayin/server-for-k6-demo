const fastifyPlugin = require("fastify-plugin");

const { MONGODB_URL, DATABASE_NAME } = require("../src/constants");

async function getDbConnection(fastify, opts) {
  fastify.register(require("fastify-mongodb"), {
    forceClose: true,
    url: `${MONGODB_URL}/${DATABASE_NAME}`,
  });
}

module.exports = fastifyPlugin(getDbConnection);
