const router = require('express').Router();

const ImoveisControllers = require('../controllers/imoveis');

const { ValidateImmobile } = require('../middlewares/imoveisValidate');

const { authToken, authTokenAdmin } = require('../middlewares/auth');

router.post('/', authToken, ValidateImmobile, ImoveisControllers.createNewImmobile);

router.get('/', authToken, ImoveisControllers.getAllImmobiles);

router.get('/:id', authToken, ImoveisControllers.getImmobileById);

router.put('/:id', authTokenAdmin, ValidateImmobile, ImoveisControllers.updateImmobileById);

router.delete('/:id', authTokenAdmin, ImoveisControllers.deleteImmobileById);

module.exports = router;
