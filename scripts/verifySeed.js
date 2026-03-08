const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  const dbName = process.env.MONGO_DB_NAME || 'giftlink';
  const collectionName = process.env.MONGO_COLLECTION || 'gifts';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const count = await coll.countDocuments();
    console.log(`Gift collection ${dbName}.${collectionName} contains ${count} documents.`);
  } catch (err) {
    console.error('Error verifying seed:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
