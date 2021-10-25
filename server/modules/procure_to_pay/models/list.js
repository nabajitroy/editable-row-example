const database = require('../../../services/mysql.js');
//var socket = io();
const socket = require("socket.io");

async function list(context) {
	
	
	
	
	
    const query = `select 
	id,
	DATE_FORMAT(receipt_date, '%Y-%m-%d') as receipt_date, 
    invoice_no,
	DATE_FORMAT(invoice_date, '%Y-%m-%d') as invoice_date, 
	DATE_FORMAT(ifs_inward_date, '%Y-%m-%d') as ifs_inward_date, 
	DATE_FORMAT(placed_to_qc_date, '%Y-%m-%d') as placed_to_qc_date, 
	DATE_FORMAT(received_from_qc_date, '%Y-%m-%d') as received_from_qc_date, 
	DATE_FORMAT(given_to_purchase_date, '%Y-%m-%d') as given_to_purchase_date, 
	DATE_FORMAT(received_from_purchase_date, '%Y-%m-%d') as received_from_purchase_date, 
	company_name,
	CASE WHEN LENGTH(status) > 5 THEN  SUBSTRING(status, 1, 3)  ELSE status END as trimstatus,
    status,
	DATE_FORMAT(received_by_a_cs, '%Y-%m-%d') as received_by_a_cs 
	from procure_list order by id desc`; 
    try {
        const result = await database.executeQuery(query);

       
            return result;
        

    } catch (error) {

        throw (error)
    }




}
module.exports.list = list;

   async function getApiAndEmit(socket)  {
  const response = new Date();
  try {
      //  const data =await bookings.current_bookings();
     socket.emit("FromAPI", response);
      }catch(err){
		 next(err);
	}
  
  
 
 
  // Emitting a new message. Will be consumed by the client
  
};



