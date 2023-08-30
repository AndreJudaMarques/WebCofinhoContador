// script.js

// Função para adicionar valor à caixa de texto
function adicionarValor(valor) {
      var caixaDeTexto = document.getElementById("caixa-de-texto");
      var valorAtual = parseFloat(caixaDeTexto.value) || 0;
      caixaDeTexto.value = (valorAtual + valor).toFixed(2);
  }

