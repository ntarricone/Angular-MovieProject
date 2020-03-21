const express = require('express');
const router = express.Router();

const users = require('../controllers/usersController.js')

router.get('/', users.getUsers);
router.post('/', users.createUser);
router.get('/my-profile/:id', users.getUser);
router.put('/:id', users.editUser);
router.delete('/delete/:id', users.deleteUser);


module.exports = router;