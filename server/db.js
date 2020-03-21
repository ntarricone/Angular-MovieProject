const mongoose = require('mongoose');
const dbconnection = 'mongodb://localhost:27017/UsersMovies'

mongoose.connect(dbconnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('conexión con db correcta'))
    .catch(err => console.log(err));


module.exports = mongoose;