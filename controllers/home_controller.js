module.exports.home = function(req,res){
  return res.end('<h1>Express is Up for Codial App</h1>')
};
module.exports.test = function(req,res){
    return res.end('<h1>Rendered from test</h1>');
};