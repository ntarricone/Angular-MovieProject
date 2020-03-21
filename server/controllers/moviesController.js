const movies = require('../models/movies.js')
const moviesController = {};

moviesController.getMovies = async (req, res) => {
    movies.find({}, (err, results) => {
        if(err){
            res.status(500).send({message: 'Error 500'});
        }
        if(!results){
            res.status(404).send({message: 'no existe esta película'})
        }
        res.json(results)
    })  
}

moviesController.createMovie = async (req, res) => {
    
    const movie = new movies(req.body);

    movies.title = req.body.title;
    movies.genre = req.body.genre;
    movies.status = req.body.status;
    movies.poster = req.body.poster;

    await movie.save();
    res.json({
        movie
    })


}
moviesController.getMovie = async (req, res) => {
    const { id } = req.params
    const movie = await movies.findById(id);
    res.json(movie)
}
moviesController.editMovie = async (req, res) => {
    const { id } = req.params;
    const { title, genre, status, poster } = req.body
    const movie = { title, genre, status, poster };
    await movies.findByIdAndUpdate(id, {$set: movie}, {new: true});
    res.json({status: 'película actualizada'})
};
moviesController.deleteMovie = async (req, res) => {
    const { id } = req.params;
    await movies.findByIdAndDelete(id);
    res.json({status: 'Película eliminada'})
};

module.exports = moviesController;