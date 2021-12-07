const router = require('express').Router();

const UserControllers = require('../controllers/user');

const { ValidateUser } = require('../middlewares/userValidations');

router.get('/', UserControllers.getAllUsers);

router.get('/:id', UserControllers.getUsersById);

router.post('/', ValidateUser, UserControllers.createNewUser);

// router.delete('/:id', UserControllers.deleteUserById);

router.put('/:id', ValidateUser, UserControllers.updateUser);

module.exports = router;
