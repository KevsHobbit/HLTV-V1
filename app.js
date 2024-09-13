function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById ("campo-pesquisa").value;

if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado.</p>"
    return
}

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

campoPesquisa = campoPesquisa.toLowerCase()

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase
    tags = dado.tags.toLowerCase


    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
        resultados += `<div class="item-resultado">
        <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
        </h2>

        <p class="descricao-meta">${dado.descricao}</p>

        <a href=${dado.link} target="_blank"> --> Clique aqui para ver o perfil do jogador. <--</a>
        </div>
    `;
    }

    
}

if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
    return
}

section.innerHTML = resultados;


}

document.getElementById('campo-pesquisa').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // isso aqui é a função enter
        pesquisar(); 
    }
});

