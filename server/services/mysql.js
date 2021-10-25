
var pool = require('../config/mysql');



async function initialize() {
  let conn;
  await pool.getConnection();
}

module.exports.initialize = initialize;


async function executeQuery(statement) {
  return new Promise(async (resolve, reject) => {
    let conn;

    try {
      conn = await pool.getConnection();
      await conn.query(statement, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });


    } catch (err) {
      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {

          await conn.release();
        } catch (err) {
          reject(err)
        }
      }
    }
  });
}


module.exports.executeQuery = executeQuery;








