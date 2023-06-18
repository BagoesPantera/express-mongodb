const { ObjectId } = require('mongodb');

const { clientjkt } = require('../server/jakarta');
const dbName = "sample_guides"
const collName = "tes"

class JakartaController{
    static async add(data){
      try {
        await clientjkt.connect();
        const db = clientjkt.db(dbName);
        const coll = db.collection(collName);

        const result = await coll.insertOne(data)
      } finally {
        await clientjkt.close();
      }
    }
    static async update(find, data){
      try {
        await clientjkt.connect();
        const db = clientjkt.db(dbName);
        const coll = db.collection(collName);
        const updateone = await coll.findOneAndUpdate(
          {id: find}, // find one
          {$set : data}, // new data
        )
      } finally {
        await clientjkt.close();
      }
    }
    static async delete(id){
      try {
        await clientjkt.connect();
        const db = clientjkt.db(dbName);
        const coll = db.collection(collName);
        const deleteone = await coll.deleteOne({id : id})
      } finally {
        await clientjkt.close()
      }
    }
}

module.exports = JakartaController

