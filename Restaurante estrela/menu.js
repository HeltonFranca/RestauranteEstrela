let carrinho = [];
let totalElement;


function adicionarItem(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
    salvarCarrinho();
    exibirNotificacao("Item adicionado ao carrinho");
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
function atualizarCarrinho() {
    const carrinhoList = document.getElementById("carrinho");
    carrinhoList.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoList.appendChild(listItem);
        total += item.preco;
    });

    totalElement = document.createElement("li");
    totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
    carrinhoList.appendChild(totalElement);
    
}

function mostrarBebidasAlcoolicas() {
    const listaBebidasAlcoolicas = document.getElementById("listaBebidasAlcoolicas");
    listaBebidasAlcoolicas.innerHTML = ""; 

    const bebidasAlcoolicas = [
        { nome: "Vinho Branco", preco: 50.00 },
        { nome: "Vinho Tinto", preco: 55.00 },
        { nome: "Vinho Rosé", preco: 60.00 }
    ];

    bebidasAlcoolicas.forEach(bebida => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${bebida.nome} - Preço: R$ ${bebida.preco.toFixed(2)}`;
        const botaoAdicionar = document.createElement("button");
        botaoAdicionar.textContent = "Adicionar ao Carrinho";
        botaoAdicionar.onclick = () => adicionarItem(bebida.nome, bebida.preco);
        itemLista.appendChild(botaoAdicionar);
        listaBebidasAlcoolicas.appendChild(itemLista);
    });

    document.getElementById("bebidasAlcoolicas").style.display = "block";
    document.getElementById("bebidasNaoAlcoolicas").style.display = "none";
}

function mostrarBebidasNaoAlcoolicas() {
    const listaBebidasNaoAlcoolicas = document.getElementById("listaBebidasNaoAlcoolicas");
    listaBebidasNaoAlcoolicas.innerHTML = ""; 

    const bebidasNaoAlcoolicas = [
        { nome: "Refrigerante", preco: 5.00 },
        { nome: "Suco Natural", preco: 7.00 },
        { nome: "Água Mineral", preco: 3.00 }
    ];

    bebidasNaoAlcoolicas.forEach(bebida => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${bebida.nome} - Preço: R$ ${bebida.preco.toFixed(2)}`;
        const botaoAdicionar = document.createElement("button");
        botaoAdicionar.textContent = "Adicionar ao Carrinho";
        botaoAdicionar.onclick = () => adicionarItem(bebida.nome, bebida.preco);
        itemLista.appendChild(botaoAdicionar);
        listaBebidasNaoAlcoolicas.appendChild(itemLista);
    });

    document.getElementById("bebidasAlcoolicas").style.display = "none";
    document.getElementById("bebidasNaoAlcoolicas").style.display = "block";
}


function exibirCarrinho() {
    const carrinhoList = document.getElementById("carrinho");
    carrinhoList.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;


        const botaoRemove = document.createElement("button");
        botaoRemove.classList.add('botaoRemover');
        botaoRemove.textContent = 'Remover do Carrinho';
        botaoRemove.onclick = () => removerCarrinho(index);
        listItem.appendChild(botaoRemove);

        carrinhoList.appendChild(listItem);
        total += item.preco;
    });

    const totalElement = document.createElement("li");
    totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
    carrinhoList.appendChild(totalElement);
    console.log(carrinho);
}

function removerCarrinho(index) {
    console.log('teste')
    carrinho.splice(index, 1); 
    salvarCarrinho(); 
    exibirCarrinho(); 
}



function carregarCarrinhoDoLocalStorage() {
    const carrinhoNoLocalStorage = localStorage.getItem("carrinho");
    if (carrinhoNoLocalStorage) {
        carrinho = JSON.parse(carrinhoNoLocalStorage);
        exibirCarrinho();
    }
}

carregarCarrinhoDoLocalStorage();

function exibirNotificacao(mensagem) {
    const notificacao = document.getElementById("notificacao");
    notificacao.textContent = mensagem;
    notificacao.style.display = "block";

    setTimeout(() => {
        notificacao.style.display = "none";
    }, 2000); 
}

function fecharCarrinho() {
    if (carrinho.length == 0) {{}
        exibirNotificacao("Seu carrinho está vazio")
        setTimeout(() => {
            window.location.href = "cardapio.html";
        }, 2000); 
    } else {
        window.location.href = "sucesso.html";
        total();
    }
}

function total() {
    const carrinhoList = document.getElementById("total");
    carrinhoList.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        total += item.preco;
    });

    totalElement = document.createElement("li");
    totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
    carrinhoList.appendChild(totalElement);
    totalElement.classList.add('total');

}



total(); 
