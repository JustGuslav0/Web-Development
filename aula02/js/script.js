let nomes = ['Ana', 'Bia', 'João', 'Euclides', 'Paulo']
let sobrenomes = ['Silva', 'Almeida', 'Vasconcelo']

for (i=0;i<nomes.length;i++){
    console.log('Bom dia,', nomes[i])
}

let nomLen = Math.floor(Math.random() * nomes.length) % nomes.length
let sobLen = Math.floor(Math.random() * nomes.length) % sobrenomes.length
console.log('pos', nomLen)
let js = ('Bom dia,', nomes[nomLen] + ' ' + sobrenomes[sobLen])

document.getElementById("js"). innerText = js