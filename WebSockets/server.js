var app= require('http').createServer(handler);
	io = require('socket.io').listen(app);

	fs = require('fs');

		app.listen(4000);
	function handler (request, response){
		fs.readFile(_dirname + 'index.html', function(error, data){
			response.writeHead(200);
			response.end(data);
		});
	}

	io.sockets.on('connection', function (socket) {
	socekt.on('Get-the-Response', function (data,fn){
	fn(data.msg);

















	});
	}