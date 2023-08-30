// script.js

// Função para adicionar valor à caixa de texto
function adicionarValor(valor) {
      var caixaDeTexto = document.getElementById("caixa-de-texto");
      var valorAtual = parseFloat(caixaDeTexto.value) || 0;
      caixaDeTexto.value = (valorAtual + valor).toFixed(2);
  }

// script.js

// ... O restante do seu código ...

// Função para limpar a caixa de texto
function limparCaixaTexto() {
    var caixaDeTexto = document.getElementById("caixa-de-texto");
    caixaDeTexto.value = ""; // Define o valor da caixa de texto como vazio
}
