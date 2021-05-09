var basep = "https://api.themoviedb.org/3/search/multi?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pr-BR&query=";
var basei = "https://image.tmdb.org/t/p/w185";
var pesquisa = "";
var title = "";
var final = true;
var resultados;
var individual;
var urll = "";

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

function separarResultados(data) {
    individual = null;
    resultados = data.results;
    for (let i = 0; i < resultados.length; i++) {
        z = document.createElement("div");
        z.setAttribute("id", i);

        if (resultados[i].media_type == "movie") { pegarTitulo(resultados[i].title) };
        if (resultados[i].media_type == "tv") { pegarTitulo(resultados[i].name) };
        pegarimagem(resultados[i].poster_path, resultados[i].id);


        document.body.appendChild(z);
    }
}

function buscarPorId(id) {
    var erro = null;
    var url = "https://api.themoviedb.org/3/movie/" + String(id) + "?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pt-BR";
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else { throw new Error("error"); }
        })
        .then(data => pegarDesc(data.overview))
        .catch((error) => pegarDesc(erro));
}


function buscarPorNome() {
    fetch(pesquisa)
        .then(response => response.json())
        .then(data => separarResultados(data));
}



function pegarTitulo(titulo) {
    if (titulo != null) {
        var y = document.createElement("p"); //mudar isso para trocar o texto
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

function pegarimagem(idm, id) {
    if (idm != null) {
        urll = basei + String(idm);
        var x = document.createElement("IMG"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", urll);
        x.setAttribute("id", id);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    } else {
        var x = document.createElement("IMG"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", "imagens/noimage.png");
        x.setAttribute("id", id);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    }
}



function abrirElemento(id) {
    //criar novo html
    const doc = document.implementation.createHTMLDocument(title);
    let p = doc.createElement("p");
    p.textContent = title;
    let img = doc.createElement("img");
    img.setAttribute("src", urll);
    img.setAttribute("alt", title);
    buscarPorId(id);
    //pegarDesc(individual.overview);
    var x = document.createElement('iframe');
    x.setAttribute("src", doc);
    x.setAttribute("stile", "display: block; background: #000; border: none;height: 100vh;width: 100vw;");
           
        //modificar iframe

        //exibir no topo

        //carregar as informaçõe


    document.body.appendChild(x);















}