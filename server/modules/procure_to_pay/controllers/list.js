const model = require('../models/list');
async function list(req, res, next) {
    try {
        const rows = await model.list();
        
        if (rows) {
            res.status(200).send({ rows });

        } else {

            res.status(200).send(["No record found"]);
        }



    } catch (err) {
        next(err);
    }
}

module.exports.list = list;