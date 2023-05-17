const express = require('express');
const userController = require('../controllers/users.controllers');
const {validateCreateUser, validateUpdateUser} = require('../middlewares');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getByid);
router.post('/', validateCreateUser, userController.create);
router.patch('/:id', validateUpdateUser, userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
