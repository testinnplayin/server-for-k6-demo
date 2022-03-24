const fastify = require('fastify')({
  logger: true,
});

const { HTTP_PORT } = require('./src/constants');

fastify.register(require('./src/dbConnector.js'));
fastify.register(
  require('./src/router')
);

async function start() {
  try {
    fastify.log.info('---- Server starting ----');
    await fastify.listen(HTTP_PORT);
    fastify.log.info('---- Server up and running ----');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
