const http = require('http');
const express = require('express');
const morgan = require('morgan');
var winston = require('../config/winston');
const cors = require('cors');
const webServerConfig = require('../config/web-server.js');
const router = require('./router.js');
const socketIo = require("socket.io");
const isAuthenticated = require('../auth/authAuthController')
const listner = require('../socket.js')
//const bookings = require('../modules/employees/models/current_bookings.js');

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

    // Combines logging info from request and response
    // app.use(morgan('combined'));
    app.use(morgan('combined', { stream: winston.stream }));

    // Parse incoming JSON requests and revive JSON.
    app.use(express.json({
      reviver: reviveJson
    }));

    // Mount the router at /api so all its routes start with /api

    app.use(cors())
   

   // app.use('/api/part_planning', isAuthenticated);
    app.use('/api', router);


    app.use(function (err, req, res, next) {
      //console.log(JSON.stringify(res.body));
      res.locals.message = err.message;
      // res.locals.error = req.app.get('env') === 'development' ? err : {};

      // add this line to include winston logging
      winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
	
  // app.use('/api/',  listner(httpServer));
   app.get(  listner(httpServer) )  
//	const io = socketIo(httpServer); // < Interesting!
	
	

 /* async function getApiAndEmit(socket)  {
  const response = new Date();
  try {
      //  const data =await bookings.current_bookings();
     socket.emit("FromAPI", response);
      }catch(err){
		 next(err);
	}
  
  
 
 
  // Emitting a new message. Will be consumed by the client
  
};*/




    httpServer.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server listening on localhost:${webServerConfig.port}`);

        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}

module.exports.initialize = initialize;

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function reviveJson(key, value) {
  // revive ISO 8601 date strings to instances of Date
  if (typeof value === 'string' && iso8601RegExp.test(value)) {
    return new Date(value);
  } else {
    return value;
  }
}
