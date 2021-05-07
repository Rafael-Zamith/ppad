var basep = "https://api.themoviedb.org/3/search/multi?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pr-BR&query=";
var basei = "https://image.tmdb.org/t/p/w185";
var pesquisa = "";
var title = "";

function search(ele) {
    if (event.key === 'Enter') {
        pesquisa = ele.value;
        pesquisa = encodeURI(pesquisa);
        pesquisa = basep + pesquisa;
        buscarPorNome();
    }
}
function buscarPorId(id) {
    var urli = "";
}
function buscarPorNome() {
    fetch(pesquisa)
        .then(response => response.json())
        .then(data => pegarimagem(data.results[0].poster_path));
}

function pegarimagem(idm) {
    var urll = basei + String(idm);
    var x = document.createElement("IMG");
    x.setAttribute("src", urll);
    x.setAttribute("alt", title);
    document.body.appendChild(x);
}

