const express = require('express');
const router = express.Router();
const userController = require('../controllers/Uers_Controllers');
const postController = require('../controllers/post_Controllers');
console.log('router loaded');
router.get('/Profile',userController.profile);
router.get('/posts',postController.post);
module.exports = router;