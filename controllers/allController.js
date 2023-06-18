const { clientsg } = require('../server/singapore');
const { clientjkt } = require('../server/jakarta');
const JakartaController = require('./jakartaController');
const SingaporeController = require('./singaporeController');
const { uid } = require('uid');

const dbName = "sample_guides"
const collName = "tes"

class AllController{
    static async findOne(req, res) {
        try{
          await clientsg.connect();
          const db = clientsg.db(dbName);
          const coll = db.collection(collName);
      
          let cursor = await coll.find({id : req.body.id}).toArray();

          if(cursor.length === 0){
            await clientjkt.connect();
            const db = clientjkt.db(dbName);
            const coll = db.collection(collName);
      
            cursor = await coll.find({id : req.body.id}).toArray();
          }

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
        const data = {
            name: 'tes',
            id: uid(32)
          }
          JakartaController.add(data)
          SingaporeController.add(data)
          res.status(200).json({"Result" : "SUCCESS"});
    }

    static async update(req, res){
        const data = {
            name: req.body.name
        }
        const find = req.body.id
        JakartaController.update(find, data)
        SingaporeController.update(find, data)
        res.status(200).json({"Result" : "SUCCESS"});
    }

    static async delete(req, res){
        const id = req.body.id
        JakartaController.delete(id)
        SingaporeController.delete(id)
        res.status(200).json({"Result" : "SUCCESS"});
    }
}

module.exports = AllController

