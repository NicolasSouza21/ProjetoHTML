// Função para validar o formulário
function validateForm(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Limpa as mensagens de erro
  clearErrors();

  // Obtém os valores dos campos do formulário
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var date = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;

  // Validação do campo de nome completo
  if (fullname === "") {
    displayError("fullnameError", "Please enter your full name");
    return;
  }

  // Validação do campo de email
  if (email === "") {
    displayError("emailError", "Please enter your email address");
    return;
  }

  // Validação do campo de senha
  if (password === "") {
    displayError("passwordError", "Please enter your password");
    return;
  }

  // Validação do campo de data de nascimento
  if (date === "") {
    displayError("dateError", "Please select your birth date");
    return;
  }

  // Validação do campo de gênero
  if (gender === "") {
    displayError("genderError", "Please select your gender");
    return;
  }

  // Se todos os campos forem válidos, o formulário pode ser enviado
  document.getElementById("myForm").submit();
}

// Função para exibir mensagens de erro
function displayError(elementId, errorMessage) {
  var errorElement = document.getElementById(elementId);
  errorElement.innerText = errorMessage;
}

// Função para limpar as mensagens de erro
function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleBtn = document.getElementById("pass-toggle-btn");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.classList.remove("fa-eye");
    toggleBtn.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleBtn.classList.remove("fa-eye-slash");
    toggleBtn.classList.add("fa-eye");
  }
}

// Adiciona eventos aos elementos do formulário
document.getElementById("myForm").addEventListener("submit", validateForm);
document.getElementById("pass-toggle-btn").addEventListener("click", togglePasswordVisibility);