const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  // const client = await MongoClient.connect("mongodb://localhost:27017"); od wersji node 18 ten kod nie działa 
  database = client.db("file-demo");
}

function getDb() {
  if (!database) {
    throw { message: "Database not connected!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
