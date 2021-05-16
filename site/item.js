var item;
var final = true;



function onload() {
    console.log("aqui")
    //pegar e buscar id na api
    var id = window.location.href;
    id = id.split("=");
    buscarPorId(id[1], id[2]);

  
    
}

function buscarPorId(id, f) {
    var erro = null;
    var url = "";
    if (f === "f") { url = "https://api.themoviedb.org/3/movie/" + String(id) + "?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pt-BR"; }
    if (f === "s") { url = "https://api.themoviedb.org/3/tv/" + String(id) + "?api_key=f79172df98ee2e8bcdda589aa34b2cb5&language=pt-BR"; }
    console.log(url);
    console.log(f);
    console.log(String(id));
    fetch(url)
        .then(response => response.json()) //catch erro e tentar com filme
        .then(data => setItem(data, f));
}

function setItem(a, id) {
    item = a;
    console.log(item);
    a = document.getElementById("090");
    z = document.getElementById("100");
    if (id == "f") { pegarTitul(item.title) };
    if (id == "s") { pegarTitul(item.name) };
    pegarimage(item);
    pegarDes(item.overview);
    aa = document.createElement("a");
    aa.setAttribute("href", "");
    aa.setAttribute("class", "u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-1");
    var tt = document.createTextNode("Avaliar");
    aa.appendChild(tt)
    z.appendChild(aa);
    a.appendChild(z);
}

function pegarTitul(titulo) {
    console.log(titulo);
    if (titulo != null) {
        var y = document.getElementById("300"); //mudar isso para trocar o texto
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

function pegarimage(idm) {
    var url = "";
    if (idm.poster_path != null) {
        url = basei + String(idm.poster_path);
        var x = document.getElementById("200"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", url);
        x.setAttribute("id", idm.id + "=" + idm.media_type);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    } else {
        var x = document.getElementById("2"); //mudar isso para trocar o src da imagem
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
function pegarDes(desc) { //não usado por enquanto
    if (desc != null) {
        var y = document.getElementById("400"); //mudar isso para trocar o texto
        var t = document.createTextNode(desc);
        y.appendChild(t);
        z.appendChild(y);
    } else {
        var y = document.getElementById("4");
        var t = document.createTextNode("sem descrição");
        y.appendChild(t);
        z.appendChild(y);
    }

}