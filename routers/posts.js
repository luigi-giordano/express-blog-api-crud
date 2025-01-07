const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/postControllers');

//index
router.get('/', postsControllers.index)

//show
router.get('/:id', postsControllers.show)

//store
router.post('/', postsControllers.store)

//update
router.put('/:id', postsControllers.update)

//modify
router.patch('/:id', postsControllers.modify)

//destroy
router.delete('/:id', postsControllers.destroy)

module.exports = router