const mongoose = require('mongoose');
const { Schema } = mongoose;

const Movies = new Schema ({
    title: { type: String, required: true },
    genre: { type: String, enum: ['Drama', 'Fiction', 'History' ] },
    status: { type: String, enum: ['Favourite', 'Watched', 'Pending' ] },
    poster: { type: String }
    
})


module.exports = mongoose.model('Movies', Movies)