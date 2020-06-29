module.exports = function(app){

app.get('/', function(req,res){
    console.log('GET REQ');
    res.render('index');
});



};
