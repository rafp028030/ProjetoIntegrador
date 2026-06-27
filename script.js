const projetos = [
    {
        titulo: "Portfólio Pessoal",
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        descricao: "Projeto que representa meu portfólio pessoal."
    }
];

const botaoTema = document.getElementById("btn-tema");

let temaEscuro = false;

const botao = (clique) => {

    if (clique) {
        document.body.classList.add("dark-theme");
        botaoTema.textContent = "Modo Claro";
        console.log("Mudou para tema escuro.");
    } else {
        document.body.classList.remove("dark-theme");
        botaoTema.textContent = "Modo Escuro";
        console.log("Mudou para tema claro.");
    }

};

botaoTema.addEventListener("click", () => {
    temaEscuro = !temaEscuro;
    botao(temaEscuro);
});