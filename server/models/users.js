const mongoose = require('mongoose');
const { Schema } = mongoose;

const Users = new Schema ({
    username: String, 
    password: String,
    moviesId: Array,
    avatar: String
})


module.exports = mongoose.model('Users', Users)