const { ObjectId } = require('mongodb');

const { clientsg } = require('../server/singapore');

const dbName = "sample_guides"
const collName = "planets"

class JakartaController{
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
    static async add(req, res){
      try {
          await clientsg.connect();
          const db = clientsg.db(dbName);
          const coll = db.collection(collName);
          const data = {
            name: 'tes'
          }

          const result = await coll.insertOne({'name' : 'tes'})
          res.status(200).json({"Result" : "SUCCESS"});
      } finally {
        await clientsg.close();
      }
    }
    static async update(req, res){
      try {
        await clientsg.connect();
          const db = clientsg.db(dbName);
          const coll = db.collection(collName);
        const updateone = await coll.findOneAndUpdate(
          {name: 'tes'}, // find one
          {$set : {name : 'tesupdate'}}, // new data
        )
        res.status(200).json({"Result" : "SUCCESS"});
      } finally {
        await clientsg.close();
      }
    }
    static async delete(req, res){
      try {
        await clientsg.connect();
        const db = clientsg.db(dbName);
        const coll = db.collection(collName);
        const deleteone = await coll.deleteOne({_id : new ObjectId('6487af06c013ef963284f215')})
        res.status(200).json({"Result" : "SUCCESS"});
      } finally {
        await clientsg.close()
      }
    }
}

module.exports = JakartaController

