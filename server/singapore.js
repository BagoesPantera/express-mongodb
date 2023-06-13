require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@cluster0.iquoj8p.mongodb.net/?retryWrites=true&w=majority`;

const clientsg = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = { clientsg }