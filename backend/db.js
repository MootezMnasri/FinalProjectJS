'use strict';
const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGO_DB_NAME || 'giftlink';
const COLLECTION_NAME = process.env.MONGO_COLLECTION || 'gifts';

let client = null;
let db = null;
let collection = null;

async function connectDb() {
  if (db) return { db, collection };
  client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  db = client.db(DB_NAME);
  collection = db.collection(COLLECTION_NAME);
  return { db, collection };
}

module.exports = { connectDb, getCollection: () => collection, close: async () => { if (client) await client.close(); } };
