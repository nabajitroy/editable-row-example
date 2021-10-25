const socketIo = require("socket.io");

 function listner(httpServer,req, res, next ) {
	  console.log("listner called");
	return function(req, res, next) {
    const options = {
		     cors: { origin: '*' }
			}
	const io = socketIo(httpServer,options );  

			io.on("connection", (socket) => {
			  console.log("New client connected");
			  if (interval) {
				clearInterval(interval);
			  }
			  interval = setInterval(() => getApiAndEmit(socket), 1000); 
			  socket.on("disconnect", () => {
				console.log("Client disconnected");
			 clearInterval(interval);
			  });
			});
         return next();
    } 
   
}
module.exports = listner;



async function getApiAndEmit(socket)  {
  const response = new Date();
  try {
      //  const data =await bookings.current_bookings();
     socket.emit("FromAPI", response);
      }catch(err){
		 next(err);
	}
}