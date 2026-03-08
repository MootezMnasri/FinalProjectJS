#!/bin/sh
set -e

MONGODB_URI=${MONGODB_URI:-mongodb://localhost:27017}
MONGO_DB_NAME=${MONGO_DB_NAME:-giftlink}
MONGO_COLLECTION=${MONGO_COLLECTION:-gifts}

echo "Seeding MongoDB at $MONGODB_URI, db=$MONGO_DB_NAME, collection=$MONGO_COLLECTION"
node ./scripts/populateMongo.js
