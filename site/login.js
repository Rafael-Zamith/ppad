function login(login, senha) {
    url = "http://127.0.0.1:8080/login/" + String(login);
    fetch(url)
        .then(response => response.json())
        .then(data => comparar(data, senha));
    
}
function comparar(data, senha) {
    if (data.senha === senha) {
        console.log("logado");
        localStorage.setItem("usuario", data.username);
    }
    
}