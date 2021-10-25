const model = require('../models/update');
async function update(req, res, next) {
    try {
		 
        const rows = await model.update(req.body); 
        if (rows) {
            res.status(200).send({ rows });

        } else {

            res.status(200).send(["No record found"]);
        }
    } catch (err) {
        next(err);
    }
}

module.exports.update = update;