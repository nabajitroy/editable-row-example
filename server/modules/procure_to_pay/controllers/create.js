const model = require('../models/create');
async function create(req, res, next) {
    try {
		 
        const rows = await model.create(req.body); 
        if (rows) {
            res.status(200).send({ rows });

        } else {

            res.status(200).send(["No record found"]);
        }
    } catch (err) {
        next(err);
    }
}

module.exports.create = create;