module.exports.analise = function(application, req, res){
    var peso = parseInt(req.query.peso, 10);
    var altura = parseInt(req.query.altura, 10)/100;
    var indiceF = peso /( altura * altura);
    var descricaoF = "";

    if (indiceF < 16) {
        descricaoF = "Subpeso severo";
    } 
    else if (indiceF < 20) {
        descricaoF = "Subpeso";
    } else if (indiceF < 25) {
        descricaoF = "Normal";
    } else if (indiceF < 30) {
        descricaoF = "Sobrepeso";
    } else if (indiceF < 40) {
        descricaoF = "Obeso";
    } else {
        descricaoF = "Obeso mórbido";
    }

    res.status(201).json( { error: false, result: { indice: indiceF, descricao: descricaoF} } );

}

