const express = require('express');
const notesController = require('../controllers/notes.controller');
const { validateCreateNote, validateUpdateNote } = require('../middlewares');
const router = express.Router();

router.get('/', notesController.getAll);
router.get('/:id', notesController.getByid);
router.post('/', validateCreateNote, notesController.create);
router.patch('/:id', validateUpdateNote, notesController.update);
router.delete('/:id', notesController.delete);

module.exports = router;
