var item;
var final = true;

function checarStorage() {
    item = JSON.parse(localStorage.getItem("pesq"));
    if (item !== null) {
        localStorage.removeItem("pesq");
    }
    else {
        console.log("erro na pesquisa");
    }
}


function onload() {
    //pegar e buscar id na api
    var id = window.location.href;
    id = id.split("=");
    buscarPorId(id[1], id[2]);
    checarStorage();
  
    console.log(item);

    z = document.getElementById("1");
    if (id[2] == "f") { pegarTitul(item.title) };
    if (id[2] == "s") { pegarTitul(item.name) };
    pegarimage(item);
    pegarDesc(item.overview);
    document.body.appendChild(z);
}
function pegarTitul(titulo) {
    console.log(titulo);
    if (titulo != null) {
        var y = document.getElementById("2"); //mudar isso para trocar o texto
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
        var x = document.getElementById("3"); //mudar isso para trocar o src da imagem
        x.setAttribute("src", url);
        x.setAttribute("id", idm.id + "=" + idm.media_type);
        x.setAttribute("onClick", "abrirElemento(this.id)");
        //x.setAttribute("href", link);
        x.setAttribute("alt", title);
        final = true;
        z.appendChild(x);
        final = true;
    } else {
        var x = document.getElementById("3"); //mudar isso para trocar o src da imagem
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
        var y = document.getElementById("4"); //mudar isso para trocar o texto
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