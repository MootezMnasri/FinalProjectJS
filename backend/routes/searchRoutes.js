const express = require('express');
const { connectDb } = require('../db');

const router = express.Router();

// GET /api/search?q=term&category=Furniture&location=NY&condition=Good
router.get('/search', async (req, res) => {
  try {
    const { q, category, location, condition } = req.query;
    const query = {};

    if (q) {
      const rx = new RegExp(q, 'i');
      query.$or = [{ title: rx }, { description: rx }];
    }

    if (category) query.category = category;
    if (location) query.location = { $regex: location, $options: 'i' };
    if (condition) query.condition = condition;

    const { collection } = await connectDb();
    const gifts = await collection.find(query).toArray();
    res.json(gifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

module.exports = router;
