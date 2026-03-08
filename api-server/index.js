import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import sentimentRoutes from './routes/sentiment.js';

const app = express();
const port = process.env.API_PORT || 5000;

app.use(express.json());
app.use('/sentiment', sentimentRoutes);

const getDbCollection = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://giftlink-mongo:27017';
  const dbName = process.env.MONGO_DB_NAME || 'giftlink';
  const collName = process.env.MONGO_COLLECTION || 'gifts';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collName);
  return { client, collection };
};

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/gifts', async (req, res) => {
  try {
    const { client, collection } = await getDbCollection();
    const docs = await collection.find({}).limit(100).toArray();
    await client.close();
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

app.get('/api/gifts/:id', async (req, res) => {
  try {
    const { client, collection } = await getDbCollection();
    const id = req.params.id;
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    await client.close();
    if (doc) res.json(doc);
    else res.status(404).json({ error: 'not_found' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

app.post('/api/gifts', async (req, res) => {
  try {
    const { client, collection } = await getDbCollection();
    const doc = req.body;
    if (!doc || !doc.title) {
      await client.close();
      return res.status(400).json({ error: 'invalid_body' });
    }
    const result = await collection.insertOne(doc);
    await client.close();
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

app.listen(port, () => {
  console.log(`GiftLink API listening on port ${port}`);
});
