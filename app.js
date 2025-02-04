const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let indice;
        do {
            indice = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indice] === amigos[i]);

        resultado.push(`${amigos[i]} → ${sorteio[indice]}`);
        sorteio.splice(indice, 1);
    }

    exibirResultado(resultado);
    
}