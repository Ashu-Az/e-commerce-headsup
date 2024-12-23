const { MongoClient } = require('mongodb');

// Replace with your MongoDB URI
const uri = "mongodb+srv://Superashu_:Superashu%40123@cluster0.ofqmd.mongodb.net/?retryWrites=true&w=majority";

async function testConnection() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB!");
    
    // Optionally, list databases to confirm the connection
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (error) {
    console.error("Connection failed:", error.message);
  } finally {
    await client.close();
  }
}

testConnection();
