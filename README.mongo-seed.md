# MongoDB Seeding for GiftLink

Purpose: Populate the gifts collection in MongoDB using a Node.js script.

- Prereqs:
- Node.js and npm installed
- MongoDB accessible (locally or via Docker)
- mongodb Node.js driver installed (run: npm install mongodb)

Files:
- data/gifts.json: sample seed data
- scripts/populateMongo.js: seed script
- .env.example: env template

Steps:
1) Install dependencies
   - npm install
2) Prepare environment
   - Copy or rename .env.example to .env and set MONGODB_URI as your MongoDB connection string
3) Run seed script
   - Ensure MongoDB is running
   - Run: node scripts/populateMongo.js
   - Optional: set env vars MONGO_DB_NAME and MONGO_COLLECTION to customize target
4) Verify
   - Connect to MongoDB and check that the gifts collection contains the seeded documents
