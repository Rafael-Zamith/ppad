var item;

function checarStorage() {
    item = JSON.parse(sessionStorage.getItem("pesq"));
    if (item !== null) {
        sessionStorage.removeItem("pesq");
    }
    else {
        alert("erro na pesquisa");
    }
}


function onload() {
    checarStorage();

}