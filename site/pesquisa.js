function carregar() {
    var nomee = String(window.location.href);
    nomee = nomee.split("=").pop();
    nomee = nomee.slice(0, -1);
    if (nomee !== "http://pisana.duckdns.org/:5500/site/index.htm") {
        nomee = encodeURI(nomee);
        window.location.href = "filmes.html?search=" + nomee;
        console.log(nomee);
    }
}