// Função para alternar a visibilidade da senha
function togglePassword(inputId) {
  let input = document.getElementById(inputId);
  input.type = input.type === "password" ? "text" : "password";
}

// 🚀 Função de Cadastro
document.getElementById("cadastroForm")?.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  let usuario = document.getElementById("usuario").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;
  let confirmSenha = document.getElementById("confirmPassword").value;

  if (senha !== confirmSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Criação do objeto usuário
  let novoUsuario = { usuario, email, senha };

  // Salva os dados no Local Storage
  localStorage.setItem("usuario", JSON.stringify(novoUsuario));

  alert("Cadastro realizado com sucesso! Faça login.");
  window.location.href = "index.html"; // Redireciona para o login
});

// 🚀 Função de Login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  let emailDigitado = document.getElementById("email").value;
  let senhaDigitada = document.getElementById("password").value;

  // Recupera os dados do Local Storage
  let usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  // Verifica se o e-mail e a senha digitados são os mesmos salvos
  if (emailDigitado === usuarioSalvo.email && senhaDigitada === usuarioSalvo.senha) {
    alert(`Bem-vindo, ${usuarioSalvo.usuario}!`);
    window.location.href = "home.html"; // Redireciona para a página inicial
  } else {
    alert("E-mail ou senha incorretos!");
  }
});

// 🚀 Função de Logout (Chamada em home.html)
function logout() {
  localStorage.removeItem("usuario"); // Remove os dados salvos
  window.location.href = "index.html"; // Redireciona para o login
}