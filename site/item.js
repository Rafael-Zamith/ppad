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
    id = id.split("=").pop();
    buscarPorId(id);
    checarStorage();



    z = document.getElementById("1");
    if (item.media_type == "movie") { pegarTitulo(item.title) };
    if (item.media_type == "tv") { pegarTitulo(item.name) };
    pegarimagem(item);
    pegarDesc(item.overview);
    document.body.appendChild(z);
}