const express = require('express');
const bodyParser = require('body-parser');
const app  = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/game', (req, res) => {
    res.render('game');
});

app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username, password);
    res.render('login');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;    
    console.log(username, password);
    res.render('sudah-login', {username, password});
});

app.listen(3000, () => {
    console.log('web app ini berjalan pada port 3000');
});