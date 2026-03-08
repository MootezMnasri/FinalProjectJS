const express = require('express');
const { ObjectId } = require('mongodb');
const { connectDb } = require('../db');

const router = express.Router();

// GET all gifts
router.get('/gifts', async (req, res) => {
  try {
    const { collection } = await connectDb();
    const gifts = await collection.find({}).toArray();
    res.json(gifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

// GET gift by id
router.get('/gifts/:id', async (req, res) => {
  try {
    const { collection } = await connectDb();
    let id;
    try {
      id = new ObjectId(req.params.id);
    } catch (e) {
      return res.status(400).json({ error: 'invalid_id' });
    }
    const gift = await collection.findOne({ _id: id });
    if (!gift) return res.status(404).json({ error: 'not_found' });
    res.json(gift);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

module.exports = router;
