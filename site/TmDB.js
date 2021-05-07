var basep = "https://api.themoviedb.org/3/search/multi?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pr-BR&query=";
var basei = "https://image.tmdb.org/t/p/w185";
var pesquisa = "";
var title = "";
var final = true;
var resultados;

function search(ele) {
    if (event.key === 'Enter') {
        if (final == true) {
            final = false;
            pesquisa = ele.value;
            pesquisa = encodeURI(pesquisa);
            pesquisa = basep + pesquisa;
            buscarPorNome();
        }
    }
}
function buscarPorId(id) {
    var urli = "";
}
function buscarPorNome() {
    fetch(pesquisa)
        .then(response => response.json())
        .then(data => separarResultados(data));
}


function separarResultados(data) {
    resultados = data.results;
    for (let i = 0; i < resultados.length; i++){
        var url = "";
        pegarimagem(resultados[i].poster_path);
        if (resultados[i].media_type == "movie") { url = "bucar filme" };
        if (resultados[i].media_type == "tv") { url = "bucar serie" };
        pegarDescFilme(url); //precisa de outro fech
        if (resultados[i].media_type == "movie") { pegarTitulo(resultados[i].title) };
        if (resultados[i].media_type == "tv") { pegarTitulo(resultados[i].name) };

        
    }
}
function pegarTitulo(titulo) {
    if (titulo != null) {
        var y = document.createElement("p");
        var t = document.createTextNode(titulo);
        y.appendChild(t);
        document.body.appendChild(y);
    }
    else {
        var y = document.createElement("p");
        var t = document.createTextNode("sem titulo");
        y.appendChild(t);
        document.body.appendChild(y);
    }
}
function pegarDescFilme(url) {
    var desc = desc;
    var url = url;

    //dom para descrição
}


function pegarimagem(idm) {
    if (idm != null) {
        var urll = basei + String(idm);
        var x = document.createElement("IMG"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", urll);
        x.setAttribute("alt", title);
        final = true;
        document.body.appendChild(x);
        final = true;
    }
    else {
        var x = document.createElement("IMG"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", "imagens/noimage.png");
        x.setAttribute("alt", title);
        final = true;
        document.body.appendChild(x);
        final = true;
    }
}

