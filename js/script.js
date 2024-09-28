let comum = [];
let especial = [];

function gerarSenhaComum() {
    let novaSenha = gerarNovaSenha();
    comum.push(novaSenha);
    atualizarFila('comum');
}

function gerarSenhaEspecial() {
    let novaSenha = gerarNovaSenhaEspecial();
    especial.push(novaSenha);
    atualizarFila('especial');
}

function gerarNovaSenha() {
    // funcao para gerar senhas sequenciais comum
    return comum.length + 1;
}

function gerarNovaSenhaEspecial() {
    // funcao para gerar senhas sequencias especial
    return Math.random().toString(36).substring(2, 7).toUpperCase();
}

function atenderComum() {
    if (comum.length > 0) {
        comum.shift();
        atualizarFila('comum');
    }
}

function atenderEspecial() {
    if (especial.length > 0) {
        especial.shift();
        atualizarFila('especial');
    }
}

function atualizarFila(idFila) {
    const fila = document.getElementById(idFila);
    fila.textContent = `Fila ${idFila}: ${eval(idFila).join(',')}`;
}