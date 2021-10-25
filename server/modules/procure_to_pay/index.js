const list = require('./controllers/list');
const update = require('./controllers/update');
const create = require('./controllers/create');
const deleteRecord = require('./controllers/deleteRecord');
module.exports = { 
   list: list.list,
   update: update.update,
   create: create.create,
   deleteRecord: deleteRecord.deleteRecord,
  
};



