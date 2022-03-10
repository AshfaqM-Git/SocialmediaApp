const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/Uers_Controllers');
const postController = require('../controllers/post_Controllers');



console.log('router loaded');
router.get('/profile', (req, res, next)=> {console.log("hello")} ,passport.checkAuthentication, userController.profile);
// router.get('/Profile',passport.checkAuthentication,userController.profile);
router.get('/posts',postController.post);

router.get('/signIn',userController.signIn);
router.get('/signUp',userController.signUp);

 router.post('/create',userController.create);

 router.post('/createsession',
      passport.authenticate('local',{failureRedirect :'/user/signin'}),
      userController.createSession
   );

router.get('/signout',userController.destroySession);
module.exports = router;