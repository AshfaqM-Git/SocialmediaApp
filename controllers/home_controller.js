module.exports.home = function(req,res){
  return res.render('home',{
    title:"Home"
  });
}
module.exports.test = function(req,res){
    return res.end('<h1>Rendered from test</h1>');
};