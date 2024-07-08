let qtdAtual = 0;

function comprar() {
  let qtd = document.getElementById('qtd').value
  let tipo = document.getElementById('tipo-ingresso').value
  qtdAtual = document.getElementById(`qtd-${tipo}`).innerHTML

  if (validateCompra(qtd, qtdAtual)) {
    document.getElementById(`qtd-${tipo}`).innerHTML = qtdAtual - qtd;
  }
}


function validateCompra(qtd, qtdAtual) {
  if (qtd > qtdAtual) {
    alert('Quantidade indisponível')
    return false;
  } else {
    alert('Ingresso comprado')
    return true;
  }
}