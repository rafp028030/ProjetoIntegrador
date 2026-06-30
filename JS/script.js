const formulario = document.querySelector("#meu-formulario");

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const msg = document.querySelector("#msg").value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener("submit", validarFormulario);

const btnTema = document.querySelector("#btn-tema");
const body = document.body;

function alternarTema() {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        btnTema.innerText = "Modo Claro";
        console.log("Tema escuro ativado.");
    } else {
        btnTema.innerText = "Modo Escuro";
        console.log("Tema claro ativado.");
    }
}

btnTema.addEventListener("click", alternarTema);

const meusProjetos = [
    {
        titulo: "Projeto Integrador - Portfólio Pessoal",
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        descricao: "Portfólio profissional desenvolvido utilizando HTML5, CSS3 e JavaScript.",
        link: "#"
    }
];

function renderizarProjetos() {
    const container = document.querySelector(".projetos-container");

    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
                <a href="${projeto.link}" target="_blank">Ver Projeto</a>
            </article>
        `;

        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();