const MongoClient = require("mongodb").MongoClient;

const {
  MONGODB_URL,
  DATABASE_NAME,
  THINGAMABOB_COLLECTION_NAME,
} = require("../src/constants");

const mongoClient = new MongoClient(MONGODB_URL);

const thingamabobs = [
  {
    name: "Thingamabob1",
    color: "green",
  },
  {
    name: "Thingamabob2",
    color: "purple",
  },
  {
    name: "Thingamabob3",
    color: "red",
  },
  {
    name: "Thingamabob4",
    color: "brown",
  },
  {
    name: "Thingamabob5",
    color: "turquoise",
  },
];

mongoClient.connect(async function (err, client) {
  const db = client.db(DATABASE_NAME);

  await db.createCollection(THINGAMABOB_COLLECTION_NAME, {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "color"],
        properties: {
          name: {
            bsonType: "string",
            minimum: 1,
            maximum: 250,
            description: "Required string between 1 and 250 characters",
          },
          color: {
            bsonType: "string",
            minimum: 1,
            maximum: 250,
            description: "Required string between 1 and 250 characters",
          },
        },
      },
    },
  });

  const thingamabobCollection = await db.collection(
    THINGAMABOB_COLLECTION_NAME
  );

  await thingamabobCollection.insertMany(thingamabobs);

  client.close();
});
