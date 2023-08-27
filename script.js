// script.js

// Obtém os elementos HTML das moedas e notas
const moeda1 = document.getElementById('moeda-1');
const moeda50 = document.getElementById('moeda-50');
const moeda25 = document.getElementById('moeda-25');
const moeda5 = document.getElementById('moeda-5');
const moeda1c = document.getElementById('moeda1c');
// ... (outros elementos das moedas)
const nota1 = document.getElementById('nota-1');
const nota2 = document.getElementById('nota-2');
const nota5 = document.getElementById('nota-5');
const nota10 = document.getElementById('nota-10');
const nota20 = document.getElementById('nota-20');
const nota50 = document.getElementById('nota-50');
const nota100 = document.getElementById('nota-100');
const nota200 = document.getElementById('nota-200');
// ... (outros elementos das notas)

// Obtém o elemento HTML da caixa de texto
const caixaDeTexto = document.getElementById('caixa-de-texto');

// Variável para armazenar o valor total
let valorTotal = 0;

// Adiciona os ouvintes de evento de clique para moedas e notas
moeda1.addEventListener('click', () => adicionarValor(1.00));
moeda50.addEventListener('click', () => adicionarValor(0.50));
moeda25.addEventListener('click', () => adicionarValor(0.25));
// ... (adiciona outros ouvintes para as moedas)
nota1.addEventListener('click', () => adicionarValor(1.00));
nota2.addEventListener('click', () => adicionarValor(2.00));
// ... (adiciona outros ouvintes para as notas)

// Função para adicionar o valor da moeda/nota ao valor total
function adicionarValor(valor) {
    valorTotal += valor;
    caixaDeTexto.value = valorTotal.toFixed(2); // Exibe o valor com duas casas decimais
}
