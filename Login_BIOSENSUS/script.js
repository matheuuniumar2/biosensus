const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const statusMessage = document.getElementById("statusMessage");
const forgotPassword = document.getElementById("forgotPassword");

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.textContent = isPassword ? "◉" : "◉";
    togglePassword.setAttribute(
        "aria-label",
        isPassword ? "Ocultar senha" : "Mostrar senha"
    );
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        statusMessage.textContent = "Preencha os campos para continuar.";
        return;
    }

    // Protótipo: não existe autenticação real nesta etapa.
    statusMessage.textContent = "Login enviado. Conectando ao sistema...";

    setTimeout(() => {
        statusMessage.textContent = "Protótipo: autenticação ainda não conectada.";
    }, 1400);
});

forgotPassword.addEventListener("click", (event) => {
    event.preventDefault();

    statusMessage.textContent =
        "A recuperação de senha será disponibilizada na versão funcional.";
});
