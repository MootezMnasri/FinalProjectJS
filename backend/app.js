const express = require('express');
const giftsRouter = require('./routes/gifts');
const searchRouter = require('./routes/searchRoutes');
const { connectDb } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API routes
app.use('/api', giftsRouter);
app.use('/api', searchRouter);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

async function start() {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`GiftLink backend listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start backend', err);
    process.exit(1);
  }
}

start();
