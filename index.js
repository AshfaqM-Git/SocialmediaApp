const express = require('express');
const app = express();
const port = 8000;
 
const expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.static('./Assets'));
//use express router

app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err)
{
    if(err){
        console.log('error in running server',err);
    }
    console.log('yupp!! server is running on port : ${port}',port);
});