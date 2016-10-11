
module.exports = function(server) {
	var io = require('socket.io').listen(server);

	var count = 0;

	io.sockets.on('connection', function(socket) {
		console.log("WE ARE USING SOCKETS!");
		console.log(socket.id);

		socket.on('user_logged', function(data) {
			console.log(data.reason);
			count++;
			io.emit('users_count', { count: count });
		});
	});
}
