import { getLista, limpaLista, adicionarItem } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

btnLimpar.addEventListener('click', limparItensDeLista);

btnAdicionar.addEventListener('click', adcionarItensLista);

function adcionarItensLista() {
    const novoItem = pEntrada.value.trim();
    if (novoItem) {
        adicionarItem(novoItem);
        atualizarLista();
        pEntrada.value = "";
    }
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}
function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}