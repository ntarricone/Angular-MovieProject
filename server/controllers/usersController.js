const users = require('../models/users.js')
const usersController = {};

usersController.getUsers = async (req, res) => {
    users.find({}, (err, results) => {
        if(err){
            res.status(500).send({message: 'Error 500'});
        }
        if (!results){
            res.status(404).send({message: 'no existe el usuario'})
        }
        res.json(results)
    });
    
}

usersController.createUser = async (req, res) => {
    const user = new users({
        username: req.body.username,
        password: req.body.password,
        moviesId: req.body.moviesId,
        avatar: req.body.avatar
    });

    await user.save(); 
    res.json({
        user
    })
}
usersController.getUser = async (req, res) => {
    const user = await users.findById(req.params.id);
    res.json(user)
    console.log(req.params)
}
usersController.editUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, moviesId, avatar } = req.body;
    const user = { username, password, moviesId, avatar }
    await users.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'Usuario actualizado'})
};
usersController.deleteUser = async (req, res) => {
    const { id } = req.params;
    await users.findByIdAndRemove(id);
    res.json({status: 'Eliminado'});
};

module.exports = usersController;