const { ObjectId } = require('mongodb');
const { uid } = require('uid')

const { clientsg } = require('../server/singapore');
const { clientjkt } = require('../server/jakarta');

const dbName = "sample_guides"
const collName = "tes"

class SingaporeController{
    static async findOne(req, res) {
        try{
          await clientsg.connect();
          const db = clientsg.db(dbName);
          const coll = db.collection(collName);
      
          const cursor = await coll.find({_id : new ObjectId(req.body.id)}).toArray();
          res.send(cursor).status(200);
        }finally{
          await clientsg.close();
        }  
    }

    static async findAll(req, res) {
        try{
          await clientsg.connect();
          const db = clientsg.db(dbName);
          const coll = db.collection(collName);
      
          const cursor = await coll.find().toArray();
          res.send(cursor).status(200);
        }finally{
          await clientsg.close();
        }  
    }
    static async add(data){
      try {
          await clientsg.connect();
          const db = clientsg.db(dbName);
          const coll = db.collection(collName);

          const result = await coll.insertOne(data)
      } finally {
        await clientsg.close();
      }
    }
    static async update(find, data){
      try {
        await clientsg.connect();
        const db = clientsg.db(dbName);
        const coll = db.collection(collName);
        const updateone = await coll.findOneAndUpdate(
            {id: find}, // find one
            {$set : data}, // new data
        )
      } finally {
        await clientsg.close();
      }
    }
    static async delete(id){
      try {
        await clientsg.connect();
        const db = clientsg.db(dbName);
        const coll = db.collection(collName);
        const deleteone = await coll.deleteOne({id : id})
      } finally {
        await clientsg.close()
      }
    }
}

module.exports = SingaporeController

