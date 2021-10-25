const database = require('../../../services/mysql.js');


async function update(context) {
	if(context.value){
  const query = ` UPDATE  procure_list  
   SET ${context.field}=  '${context.value}'    WHERE ID ='${context.id}'`;
   
    
  try {
    const result = await database.executeQuery(query);
    return context;


  } catch (error) {

    return (error)
  }
	}else{
    return ['nothing to update']
	}

}
module.exports.update = update;








