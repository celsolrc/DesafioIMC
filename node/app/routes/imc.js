var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

module.exports = function(application){
    application.get('/analise', cors(corsOptions), function(req,res){
        application.app.controllers.imc.analise(application, req, res);
    });
    application.get('/', cors(corsOptions), function(req,res){
        res.json({status: 'Server is running!'})
    });
}