const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');
// oracledb.fetchAsBuffer = [ oracledb.BLOB ];
async function initialize() {
  await oracledb.createPool(dbConfig.dbPool);
}

module.exports.initialize = initialize;

async function close() {
  await oracledb.getPool().close();
}

module.exports.close = close;

function simpleExecute(statement, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;
    //oracledb.fetchAsBuffer = [ oracledb.BLOB ]
    //console.log(JSON.stringify(opts))
//console.log(statement)
    try {
      conn = await oracledb.getConnection();
      const result = await conn.execute(statement, binds, opts);

      resolve(result);
    } catch (err) {
console.log(err)
      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          throw (err)
        }
      }
    }
  });
}

module.exports.simpleExecute = simpleExecute;


function executeMany(statement, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;
    const opts = {
      autoCommit: true,
      outFormat: oracledb.OBJECT,
      batchErrors: true,
       
    };
    try {
      conn = await oracledb.getConnection();
      const result = await conn.executeMany(statement, binds, opts);

      resolve(result);
    } catch (err) {

      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}
module.exports.executeMany = executeMany;