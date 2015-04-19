var express = require('express'),
	  app = express();

app.set('port', 3000);

app.get('/', function(req, res) {
	console.log('yoyoyo!!!!');
	res.type('application/json');
	res.status(200);
	res.send(JSON.stringify(
		{
			request: {
				baseURl: req.baseURl,
				hostName: req.hostname,
				path: req.path,
				protocal: req.protocal || 'Not Available',
				query: req.query
			}
		}
	));
});

// custom 404 page
app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + app.get('port') +
	'; press Ctrl-C to terminate.');
});