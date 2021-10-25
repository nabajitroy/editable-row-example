const database = require('../../../services/mysql.js');


async function deleteRecord(id) {
	 const query = ` delete from  procure_list where id ='${id}'`;
    
  try {
    const result = await database.executeQuery(query);
    return id;


  } catch (error) {

    throw (error)
  }
 



}
module.exports.deleteRecord = deleteRecord;








