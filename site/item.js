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
    if (id[2] == "f") { pegarTitulo(item.title) };
    if (id[2] == "s") { pegarTitulo(item.name) };
    pegarimagem(item);
    pegarDesc(item.overview);
    document.body.appendChild(z);
}