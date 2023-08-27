// script.js

// Obtém o botão e a caixa de texto pelo ID
const botaoMoeda1 = document.getElementById('botao-moeda-1');
const caixaDeTexto = document.getElementById('caixa-de-texto');

// Valor da moeda de 1 real
const valorMoeda1Real = 1.0;

// Adiciona um ouvinte de clique ao botão
botaoMoeda1.addEventListener('click', () => {
      console.log('botao da moeda 1 real clicado')
    // Atualiza a caixa de texto com o valor da moeda de 1 real
    caixaDeTexto.value = valorMoeda1Real.toFixed(2);
});
