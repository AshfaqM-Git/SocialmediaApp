const express = require('express');
const app = express();
const port = 8000;
const expresslayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./Assets'));

app.use(expresslayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('view engine','ejs');
app.set('views','./views');
app.use(session ({
    name:'codial' ,
    secret : 'blahsomething',
    saveuninitialised : false , 
    resave : false,
    
    cookie :{
        maaxage : (1000*60*100)
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/Codial_development' })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//use express router
app.use('/',require('./routes'));

app.listen(port,function(err)
{
    if(err){
        console.log('error in running server',err);
    }
    console.log('yupp!! server is running on port : ${port}',port);
});