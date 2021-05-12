function carregar() {
    var id = window.location.href;
    id = id.split("=").pop();
    console.log(id);


}

function onSub(texto) {
    var pesquisa = texto;
    pesquisa = encodeURI(pesquisa);
    pesquisa = basep + pesquisa;
    buscarPorNome(pesquisa);
}