const express = require('express');
const router = new express.Router();
const procureToPay = require('../modules/procure_to_pay');

 
 
  
 router.route('/procure_to_pay/list/')
  .get(procureToPay.list) // Get all 

 router.route('/procure_to_pay/update/:id')
  .put(procureToPay.update) // update 
  
 router.route('/procure_to_pay/create')
  .post(procureToPay.create) // create  
 router.route('/procure_to_pay/delete/:id?')
  .delete(procureToPay.deleteRecord) // create  
   
module.exports = router;
