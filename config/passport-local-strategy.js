const passport = require('passport');

const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField :'email'
},
function(email,password,done){

    User.findOne({email:email},function(err,user){
        if(err){console.log('Error in finding the User');
    return done(err);}
    if(!user || user.password != password){
        console.log('Invalid UserName or the PAsssword');
        return done(null,false);
    }
     return done(null,user);
    });

}));

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log('error in finding the User');
      return done(err);
    }
    return done(null,user);
    });
});

passport.checkAuthentication = function(req,res,next){
    console.log(req)
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signned In
  return res.redirect('/user/signin');
}

passport.setAuthenticatedUser = function(req,res,next){
           if(req.isAuthenticated()){
               res.locals.user = req.user;
           }
           next();
}

module.exports = passport ; 
