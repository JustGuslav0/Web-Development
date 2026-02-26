// const produto1 = {id: 2, produto: "Arroz"};
// const emJSON = JSON.stringify(produto1);

// console.log(emJSON);
// console.log(typeof produto1)
// console.log(typeof emJSON)

// localStorage.setItem("produto1",emJSON);

// stringify - faz com que o conteudo do JS vire JSON
// parse - faz com que o conteudo do JSON vire JS

const emJSON = '{"id": 2, "produto": "Arroz"}'
const produto1 = JSON.parse(emJSON)

console.log(typeof emJSON)
console.log(typeof produto1)



const produtos = [
    { id: 1, produto: "Arroz", preco: 125},
    { id: 1, produto: "Arroz", preco: 125},
    { id: 1, produto: "Arroz", preco: 125},
    { id: 1, produto: "Arroz", preco: 125}
];

const armazenarLocal = (chave, valor) => {localStorage.setItem(chave, valor)};