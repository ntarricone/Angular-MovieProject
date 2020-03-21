const express = require('express');
var logger = require('morgan');
var path = require('path');
const app = express();
const { mongoose } = require('./db.js');
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())


// Settings
app.set('port', 3000);

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/users',require('./routes/users.js'));
app.use('/movies',require('./routes/movies.js'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('server funcionando en', app.get('port'))
})





