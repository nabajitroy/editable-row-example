const database = require('../../../services/mysql.js');
const config = require('../../../config/config.js'); 
async function create(context) { 
     
		      const query = `insert into procure_list (
			receipt_date, 
            invoice_no,
            invoice_date,
            company_name ,
            ifs_inward_date ,
            placed_to_qc_date ,
            received_from_qc_date ,
            status ,
            given_to_purchase_date ,
            received_from_purchase_date ,
            received_by_a_cs
			) values (
			'${context.receipt_date}',
			'${context.invoice_no}',
			'${context.invoice_date}',
			'${context.company_name}',
			'${context.ifs_inward_date}',
			'${context.placed_to_qc_date}',
			'${context.received_from_qc_date}',
			'${context.status}',
			'${context.given_to_purchase_date}',
			'${context.received_from_purchase_date}',
			'${context.received_by_a_cs}'
			 
			)`;
 
				 try { 
					const result = await database.executeQuery(query);
			       const  response =  JSON.parse(JSON.stringify(result)); 
				   
						return {
						id: response.insertId,
						receipt_date:context.receipt_date,
						invoice_no: context.invoice_no,
						invoice_date: context.invoice_date,
						company_name: context.company_name,
						ifs_inward_date: context.ifs_inward_date,
						placed_to_qc_date: context.placed_to_qc_date,
						received_from_qc_date:context.received_from_qc_date,
						status: context.status,
						given_to_purchase_date: context.given_to_purchase_date,
						received_from_purchase_date: context.received_from_purchase_date,
						received_by_a_cs: context.received_by_a_cs
					 };
				  
				 
				  } catch (error) {

					throw (error)
				  }
	 
 

 }
 
module.exports.create = create;











/*const database = require('../../../services/mysql.js');
const config = require('../../../config/config.js');
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
async function create(context) {
	var currentDate = new Date();
	var minutesToAdd=config.minutesToAdd; 
	var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);	 
    var toDay = days[currentDate.getDay()] ;
	var CurrentMySqlDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
	//console.log(currentDate.toISOString().slice(0, 19).replace('T', ' '))
   // const SelectQuery = ` SELECT COUNT(*) AS COUNT,MAX(BOOKING_SLOT) AS MAX_SLOT FROM BOOKINGS  WHERE BOOKING_DATE = DATE('${CurrentMySqlDate}')`;
	 
//	try { 
   // const result = await database.executeQuery(SelectQuery);
	//const  data =  JSON.parse(JSON.stringify(result));
	
	//if(data[0].COUNT == 0 ){
		
	     
const query = ` INSERT INTO BOOKINGS (EMP_ID,BOOKING_DATE,BOOKING_HOUR,BOOKING_MINUTE	) VALUES ('${context.emp_id}','${context.booking_date}','${context.booking_hour}','${context.booking_minute}')`;
console.log(query); 
 try { 
    const result = await database.executeQuery(query);
    return result;


  } catch (error) {

    throw (error)
  } 




}
module.exports.create = create;*/








