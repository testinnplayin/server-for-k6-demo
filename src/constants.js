require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

const THINGAMABOB_COLLECTION_NAME = "thingamabobs";

module.exports = {
  DATABASE_NAME: "k6-demo",
  HTTP_PORT: 3000,
  MONGODB_URL,
  THINGAMABOB_COLLECTION_NAME,
};
