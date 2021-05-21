var resultados = [];
var id;
function postar(comentario) {
    var user = localStorage.getItem("usuario");
    console.log(comentario)
    if (user !== null) {
        var data = {
            //id
            coment_author: user,
            comentarios: String(comentario),
            curtidas: 0,
            id_item: id
        };
        console.log(data);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://pisana.duckdns.org:8443/avaliacao/");
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.onreadystatechange = function () {
            location.reload();
        }
        // send the collected data as JSON
        xhr.send(JSON.stringify(data));
        
    }
    else {alert("faça Login!!!")}
}
function onload() {
    //pegar e buscar id na api
    id = window.location.href;
    id = parseInt(id.split("=").pop());
    var url = "https://pisana.duckdns.org:8443/avaliacao/"
    fetch(url)
        .then(response => response.json())
        .then(data => pegarAval(data, id));
}
function pegarAval(data, id) {
    var k = 1;
    for (let n = 0; n < data.length; n++) {
        if (data[n].id_item === id) {

            resultados.push(data[n]);
        }
    }
    escreverComents(resultados);
}
function escreverComents(resultados) {
    var k = 0;
    for (let i = 0; i < resultados.length; i++) {
        if (k > 4) { k = 1 };
        var att = "u-border-2 u-border-grey-75 u-container-style u-group u-radius-30 u-shape-round u-white u-group-" + String(k);
        j = document.getElementById("10k");
        jj = document.createElement("div");
        jj.setAttribute("class", att);
        z = document.createElement("div");
        z.setAttribute("class", "u-container-layout u-valign-top-xl u-container-layout-1");
        z.setAttribute("id", i);
        
        pegarnome(resultados[i].coment_author);
        pegarcoment(resultados[i].comentarios);
        jj.appendChild(z);
        j.appendChild(jj);
        k++;
    }

}

function pegarnome(nome) {
    if (nome != null) {
        var y = document.createElement("p"); //mudar isso para trocar o texto
        y.setAttribute("class", "u-text u-text-1");
        var t = document.createTextNode(nome);
        y.appendChild(t);
        z.appendChild(y);
    } else {
        var y = document.createElement("p");
        y.setAttribute("class", "u-text u-text-1");
        var t = document.createTextNode("sem titulo");
        y.appendChild(t);
        z.appendChild(y);
    }
}

function pegarcoment(nome) {
    if (nome != null) {
        var y = document.createElement("p"); //mudar isso para trocar o texto
        y.setAttribute("class", "u-text u-text-1");
        var t = document.createTextNode(nome);
        y.appendChild(t);
        z.appendChild(y);
    } else {
        var y = document.createElement("p");
        y.setAttribute("class", "u-text u-text-1");
        var t = document.createTextNode("sem titulo");
        y.appendChild(t);
        z.appendChild(y);
    }
}

