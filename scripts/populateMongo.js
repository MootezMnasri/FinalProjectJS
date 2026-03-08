const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

async function main() {
  const dataPath = path.join(__dirname, '..', 'data', 'gifts.json');
  let raw;
  try {
    raw = fs.readFileSync(dataPath, 'utf8');
  } catch (err) {
    console.error(`Failed to read data file at ${dataPath}:`, err.message);
    process.exit(1);
  }

  let records;
  try {
    records = JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse gifts.json:', err.message);
    process.exit(1);
  }

  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  const dbName = process.env.MONGO_DB_NAME || 'giftlink';
  const collectionName = process.env.MONGO_COLLECTION || 'gifts';

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Clear existing data
    await collection.deleteMany({});

    if (Array.isArray(records) && records.length > 0) {
      const result = await collection.insertMany(records);
      console.log(`Inserted ${result.insertedCount} gifts into ${dbName}.${collectionName}`);
    } else {
      console.log('No gift records found to insert.');
    }
  } catch (err) {
    console.error('Error populating MongoDB:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
