const express = require('express');
const router = express.Router();
const postController = require('../controller/postController.js');

//index, shaw all element
router.get('/', postController.index);

//show display element with id
router.get('/:id', postController.show);

//create new element
router.post('/', postController.create);

//update element
router.put('/:id', postController.update);

//modify element
router.patch('/:id', postController.patch);

//modify element
router.delete('/:id', postController.destroy);

module.exports = router;