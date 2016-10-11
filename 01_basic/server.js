var express 	= require('express'),
	bodyParser	= require('body-parser'),
	sassMiddleware = require('node-sass-middleware'),
	path		= require('path'),
	root		= __dirname,
	port		= process.env.PORT || 8000,
	app			= express();

app.use(
	sassMiddleware({
		src: path.join(root, 'client/static/sass'),
		dest: path.join(root, 'client/static/css'),
		prefix: '/static/css',
		debug: true,
		outputStyle: 'compressed'
	})
);
app.use(express.static(path.join(root, 'bower_components')));
app.use(express.static(path.join(root, 'client')));

require('./server/config/mongoose');
require('./server/config/routes');

app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});
