const model = require('../models/deleteRecord');
async function deleteRecord(req, res, next) {
    try {
		 console.log(req.params.id)
     const rows = await model.deleteRecord(req.params.id); 
       if (rows) {
            res.status(200).send({ rows });

        } else {

            res.status(200).send(["No record found"]);
        } 
    } catch (err) {
        next(err);
    }
}

module.exports.deleteRecord = deleteRecord;