var basep = "https://api.themoviedb.org/3/search/multi?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pr-BR&query=";
var basei = "https://image.tmdb.org/t/p/w185";

var title = "";
var final = true;


function search(ele) { 
    if (event.key === 'Enter') {
        if (final == true) {
            final = false;
            var pesquisa = ele.value;
            pesquisa = encodeURI(pesquisa);
            pesquisa = basep + pesquisa;
            buscarPorNome(pesquisa);
        }
    }
}

function carregar() {
    var nomee = String(window.location.href);
    nomee = nomee.split("=").pop();
    console.log(nomee);
    var pesquisa = basep + nomee;
    buscarPorNome(pesquisa);

}


function buscarPorId(id, f) {
    var erro = null;
    var url = "";
    if (f === "f") { url = "https://api.themoviedb.org/3/movie/" + String(id) + "?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pt-BR"; }
    if (f === "s") { url = "https://api.themoviedb.org/3/tv/"    + String(id) + "?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pt-BR"; }
    console.log(url);
    console.log(f);
    console.log(String(id));
    fetch(url)
        .then(response => response.json()) //catch erro e tentar com filme
        .then(data => setItem(data));
}


function buscarPorNome(pesquisa) {
    console.log("nomee");
    fetch(pesquisa)
        .then(response => response.json())
        .then(data => separarResultados(data));
}

function setItem(item) {
    localStorage.setItem("pesq", JSON.stringify(item));
}

function separarResultados(data) {
    individual = null;
    var resultados = data.results;
    var k = 1;
    for (let i = 0; i < resultados.length; i++) {
        if (k > 4) { k = 1 }
        var att = "u-border-2 u-border-grey-75 u-container-style u-group u-radius-30 u-shape-round u-white u-group-" + String(k);
        j = document.getElementById("50000");
        jj = document.createElement("div");
        jj.setAttribute("class", att);
        z = document.createElement("div");
        z.setAttribute("class", "u-container-layout u-valign-top-xl u-container-layout-1");
        z.setAttribute("id", i);

        if (resultados[i].media_type == "movie") { pegarTitulo(resultados[i].title) };
        if (resultados[i].media_type == "tv") { pegarTitulo(resultados[i].name) };
        pegarimagem(resultados[i]);

        jj.appendChild(z);
        j.appendChild(jj);
        k++;
    }
}

function pegarTitulo(titulo) {
    if (titulo != null) {
        var y = document.createElement("p"); //mudar isso para trocar o texto
        y.setAttribute("class", "u-text u-text-1");
        var t = document.createTextNode(titulo);
        y.appendChild(t);
        z.appendChild(y);
        title = titulo;
    } else {
        var y = document.createElement("p");
        y.setAttribute("class", "u-text u-text-1");
        var t = document.createTextNode("sem titulo");
        y.appendChild(t);
        z.appendChild(y);
        title = "Filme";
    }
}


function pegarimagem(idm) {
    var url = "";
    if (idm.poster_path != null) {
        url = basei + String(idm.poster_path);
        var x = document.createElement("img"); //mudar isso para trocar o src da imagem
        x.setAttribute("class", "u-expanded-width u-image u-image-round u-radius-10 u-image-2");
        x.setAttribute("src", url);
        x.setAttribute("id", idm.id + "=" + idm.media_type);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    } else {
        var x = document.createElement("img"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", "imagens/noimage.png");
        x.setAttribute("id", idm.id + "=" + idm.media_type);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    }
}



function abrirElemento(id) {  
    var ida = id.split("=");
    console.log(ida)
    if (ida[1] == "tv")    { window.location.href = "descricaofilme.html?id=" + ida[0] + "=s"; }
    if (ida[1] == "movie") { window.location.href = "descricaofilme.html?id=" + ida[0] + "=f";}

}