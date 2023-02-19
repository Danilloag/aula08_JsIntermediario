let quantidadeFilhosDeBody = document.childNodes; 
console.log(quantidadeFilhosDeBody);

function contagemFilhos (elemento) {
    if (elemento.length <= 5) {
        return false;
    } else {
        return true;
    }    
}

console.log(`O número de elemento filhos de body é maior que 5? ${contagemFilhos(quantidadeFilhosDeBody)}`);

//Exibindo todos os elementos p
let listaDeParagrafos = document.querySelectorAll('p');
console.log(listaDeParagrafos);