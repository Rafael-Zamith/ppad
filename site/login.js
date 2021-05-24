function login(login, senha) {
    url = "https://pisana.duckdns.org:8443/login/" + String(login);
    fetch(url)
        .then(response => response.json())
        .then(data => comparar(data, senha));
    
}
function comparar(data, senha) {
    if (data.senha === senha) {
        alert("logado");
        localStorage.setItem("usuario", data.username);
    }
    
}