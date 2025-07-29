import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

btnLimpar.addEventListener('click', limparItensDeLista);

btnAdicionar.addEventListener('click', adcionarItemNaLista);

function atualizarLista() {
    olItens.innerHTML = '';
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function adcionarItemNaLista() {
    adicionaNaLista(pEntrada.textContent);
    pEntrada.textContent = '';
    atualizarLista();
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}
