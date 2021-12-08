const router = require('express').Router();

const UserControllers = require('../controllers/user');

const { ValidateUser, ValidateEqualEmail } = require('../middlewares/userValidations');

router.get('/', UserControllers.getAllUsers);

router.get('/:id', UserControllers.getUsersById);

router.post('/', ValidateEqualEmail, ValidateUser, UserControllers.createNewUser);

// router.delete('/:id', UserControllers.deleteUserById);

router.put('/:id', ValidateUser, UserControllers.updateUser);

module.exports = router;
