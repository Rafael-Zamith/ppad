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
        fetch("https://pisana.duckdns.org/:8080/avaliacao/", {
            method: "POST",
                body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! response:", res);
        });
     }
    else {alert("faça Login!!!")}
}
function onload() {
    console.log("aqui");
    //pegar e buscar id na api
    id = window.location.href;
    id = id.split("=").pop;
}