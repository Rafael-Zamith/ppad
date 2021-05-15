var basep = "https://api.themoviedb.org/3/search/multi?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pr-BR&query=";
var basei = "https://image.tmdb.org/t/p/w185";

var title = "";
var final = true;


function search(ele) { //n usado mais
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
    for (let i = 0; i < resultados.length; i++) {
        z = document.createElement("div");
        z.setAttribute("id", i);

        if (resultados[i].media_type == "movie") { pegarTitulo(resultados[i].title) };
        if (resultados[i].media_type == "tv") { pegarTitulo(resultados[i].name) };
        pegarimagem(resultados[i]);


        document.body.appendChild(z);
    }
}

function pegarTitulo(titulo) {
    console.log(titulo);
    if (titulo != null) {
        var y = document.createElement("p"); //mudar isso para trocar o texto
        console.log(titulo);
        var t = document.createTextNode(titulo);
        y.appendChild(t);
        z.appendChild(y);
        title = titulo;
    } else {
        var y = document.createElement("p");
        var t = document.createTextNode("sem titulo");
        y.appendChild(t);
        z.appendChild(y);
        title = "Filme";
    }
}

function pegarDesc(desc) {
    if (desc != null) {
        var y = document.createElement("p"); //mudar isso para trocar o texto
        var t = document.createTextNode(desc);
        y.appendChild(t);
        z.appendChild(y);
    } else {
        var y = document.createElement("p");
        var t = document.createTextNode("sem descrição");
        y.appendChild(t);
        z.appendChild(y);
    }

}

function pegarimagem(idm) {
    var url = "";
    if (idm.poster_path != null) {
        url = basei + String(idm.poster_path);
        var x = document.createElement("IMG"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", url);
        x.setAttribute("id", idm.id + "=" + idm.media_type);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    } else {
        var x = document.createElement("IMG"); //mudar isso para trocar o src da imagem
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
    if (ida[1] == "tv") { window.location.href = "item.html?id=" + ida[0] + "=s"; }
    if (ida[1] == "movie") { window.location.href = "item.html?id=" + ida[0] + "=f";}

}