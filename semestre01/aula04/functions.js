function fazAlgo(algo){
    console.log('Faz',algo)
}

// Consigo criar uma let que ja tenha um valor da function pre definido 
let faz = fazAlgo('algoo')

// Consigo criar uma function a partir de uma let, apenas com = function()
let teste = function(testeF){
    return console.log(testeF)
}

teste('oi')

// Consigo chamar uma função dentro de outra função

function chamar(teste){
    teste()
}

chamar(fazAlgo)

// Para programar uma função de um jeito diferente
let pera = () => {
    console.log('alguma coisa')
}

// setTimeout faz com que o código seja executado apenas quando o timer acabar, sendo setTimeout(uma funcao, delay que voce quer que espere para ser feito a fucao = 1000 igual a 1 seg)
setTimeout(pera,3000)

//setInterval faz com que o código seja executado a cada intervalo setI
setInterval(pera,1000)

hora = document.getElementById('hora')
minuto = document.getElementById('minuto')
segundo = document.getElementById('segundo')
console.log(hora,minuto,segundo)

let qnt = 0

setInterval(() => {
    qnt++
    hora.innerText = qnt
},1000)