// let idade = prompt("Digite sua idade")
// parseInt() transforma o conteudo da variavel em inteiro (caso tenha)
// idade = parseInt(idade)
// Faz com que adicione +1 para o valor da sua variavel
// idade++
// Colocar () dentro do console caso queira que faça a conta, porque ai faz primeiro antes de concatenar
// console.log("Sua idade é: "+(idade+1))
let div = document.getElementById("jogador")


// nome = prompt("Digite seu nome:")


// Faz com que o conteúdo recebido do getElement mude, já que está atribuindo um valor novo
div.innerText = nome
console.log('Seu nome é: ', nome)

//Um trecho que tem códigos, quando quiser usar voce chama
function clickBotao() {
    console.log("Estou fazendo algo...")
}

function alterarNome(){
    //Recebo do HTML o input que escrevo
    let nomeInput = document.getElementById("caixaNome")
    //Recebo do HTML o id do nome do jogador
    let nomeJogador = document.getElementById("nomeJogador")
    //Dou a variavel "nome" o valor da variavel input que o jogador escreve
        //.value pega apenas o conteudo da div do html, o texto ou algo do tipo
    let nome = nomeInput.value
    // Transforma o nome do jogador em o nome que ele digitou no input e clicou
    nomeJogador.innerText = nome

    //Preciso voltar esta função no botão, porque ela é acionada assim que eu clico no botão
}
        
// Chama sua função