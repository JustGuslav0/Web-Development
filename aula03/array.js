let variavel = document.getElementById("array").innerHTML;
let au = prompt('Escreva');
variavel = au;

function caixa(texto,char){
    let linha = '+'+char
    for(let i =0; i < texto.length; i++){
        linha = linha + '-'
    }
    linha = linha + '-+'
    console.log(linha);
    console.log("| "+ texto + " |");
    console.log(linha);
}

let nome = 'Ana'
caixa(nome, '*')
caixa('oi gente', '#')

// Isso faz com que seja adicionado na página algo totalmente novo, .append adiciona, o document.body é para adicionar isso no body
// document.body.append(elem)