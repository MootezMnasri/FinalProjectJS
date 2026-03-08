import express from 'express';
import natural from 'natural';

const router = express.Router();
const tokenizer = new natural.WordTokenizer();
const SentimentAnalyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new SentimentAnalyzer('English', stemmer, 'afinn');

router.get('/', (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: 'text query parameter is required' });
  }
  const tokens = tokenizer.tokenize(text);
  const score = analyzer.getSentiment(tokens);
  const label = score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
  res.json({ text, score, label });
});

export default router;
