if (localStorage.getItem("token") == null) {
  alert("Faça login para acessar a página");
  window.location.href = "./assets/html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.user}`; /*exibe o e-mail no cabeçalho da página*/

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}
