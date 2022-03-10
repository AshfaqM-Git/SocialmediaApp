 const User  = require('../models/user');

module.exports.profile = function(req,res){

    return res.render('userProfile',{
        title:"Profile"
    });
}
module.exports.signIn = function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/user/profile');
    }
    return res.render('signIn',{
        title:"SignIN PAge"
    });
}
module.exports.signUp = function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/user/profile');
    }
    return res.render('signUp',{
        title:"SignUP PAge"
    });
}
 
module.exports.create = function(req,res){
    if(req.body.password != req.body.confpassword){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
           if(err){
               console.log("errror in Sign Up" ); return
           }
           if(!user){
               User.create(req.body,function(err,user){
                   if(err){console.log("error in creating User"); return}
                   return res.redirect('/user/signin');
               })
           }else{
               res.redirect('back');
           }
    });

}
 module.exports.createSession = function(req,res){
     return res.redirect('/');
 }
  
 module.exports.destroySession = function(req,res){
    req.logout(); 
    return res.redirect('/');
 }