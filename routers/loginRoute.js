const router = require('express').Router();

const { UserLogin } = require('../controllers/login');

const { validateLogin } = require('../middlewares/loginValidate');

router.post('/', validateLogin, UserLogin);

module.exports = router;
