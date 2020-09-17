var app = require('./config/server');

var cors = require('cors')

app.use(cors())

app.listen(3000, function(){
    console.log("Servidor ON");
});