const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaNaLista(item) {
    if (item && typeof item === 'string') {
        lista.push(item);
    }
}

export function removeDaLista(indexItem) {
    if (indexItem !== -1) {
        lista.splice(indexItem, 1);
    }
}