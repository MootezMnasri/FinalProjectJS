# Windows PowerShell wrapper to seed MongoDB
$env:MONGODB_URI = $env:MONGODB_URI
$env:MONGO_DB_NAME = $env:MONGO_DB_NAME
$env:MONGO_COLLECTION = $env:MONGO_COLLECTION
Write-Host "Seeding MongoDB with gifts..."
node .\populateMongo.js
