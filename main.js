const express = require('express');
const app = express();
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);

app.use(session({
	secret: '7nDf76423m',
	resave: false,
	saveUninitialized: false,
	cookie: {
		//path: '/',
		//httpOnly: true,
		maxAge: 365 * 24 * 60 * 60 * 1000,
	},
	store: new SQLiteStore,
}));
app.use(express.static('static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
	if(!req.session.d) req.session.d = 1;
	else req.session.d++;
	res.render('index', { name: 'First User' + req.session.d, title: "Page1" });
});

app.listen(85, function () {
	console.log('deploymeplz started');
});