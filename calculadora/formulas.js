// Função para alternar a exibição das dicas de ferramenta.
function toggleTooltip() {
  // Acessa o elemento da dica de ferramenta pelo seu ID.
  var tooltip = document.getElementById("tooltipMessage");
  // Verifica se a dica de ferramenta está atualmente oculta.
  if (tooltip.style.display === "none") {
    // Se estiver oculta, a torna visível e totalmente opaca.
    tooltip.style.display = "block";
    tooltip.style.opacity = 1;
  } else {
    // Se estiver visível, inicia a transição para torná-la transparente.
    tooltip.style.opacity = 0;
    // Após a transição (300ms), oculta a dica de ferramenta.
    setTimeout(function () { tooltip.style.display = "none"; }, 300);
  }
}
// As funções toggleTooltip2() a toggleTooltip5() seguem a mesma lógica para diferentes dicas de ferramenta.
  function toggleTooltip2() {
    var tooltip2 = document.getElementById("tooltipMessage2");
    if (tooltip2.style.display === "none") {
      tooltip2.style.display = "block";
      tooltip2.style.opacity = 1;
    } else {
      tooltip2.style.opacity = 0;
      setTimeout(function () { tooltip2.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }
  function toggleTooltip3() {
    var tooltip3 = document.getElementById("tooltipMessage3");
    if (tooltip3.style.display === "none") {
      tooltip3.style.display = "block";
      tooltip3.style.opacity = 1;
    } else {
      tooltip3.style.opacity = 0;
      setTimeout(function () { tooltip3.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }
  
  function toggleTooltip4() {
    var tooltip4 = document.getElementById("tooltipMessage4");
    if (tooltip4.style.display === "none") {
      tooltip4.style.display = "block";
      tooltip4.style.opacity = 1;
    } else {
      tooltip4.style.opacity = 0;
      setTimeout(function () { tooltip4.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }

  function toggleTooltip5() {
    var tooltip5 = document.getElementById("tooltipMessage5");
    if (tooltip5.style.display === "none") {
      tooltip5.style.display = "block";
      tooltip5.style.opacity = 1;
    } else {
      tooltip5.style.opacity = 0;
      setTimeout(function () { tooltip5.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }

  // Função para formatar números como valores monetários em real brasileiro.
  function formatarValorMonetario(valor) {
    // Utiliza a API Intl.NumberFormat para a formatação.
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

  // Declaração de variáveis globais para armazenar valores financeiros inseridos pelo usuário.
  var custoDeAquisicao = 0;
  var percentualCusto = 0;
  var despesaFixa = 0;
  var receitaMensal = 0;
  var porcentagemLucro = 0;
  var unidadeVariavel = 0;

  // Eventos input para atualizar os valores com base na entrada do usuário.
  document.getElementById('custoAquisicaoInput').addEventListener('input', function () {
    custoDeAquisicao = parseFloat(this.value) || 0;
    // Atualiza a exibição dos valores e recalcula os resultados.
    document.getElementById('cenarioCustoAquisicao').textContent = formatarValorMonetario(custoDeAquisicao);
    
    // Repete o processo para as demais entradas e realiza os cálculos necessários.
    
  });

  document.getElementById('percentualCustoInput').addEventListener('input', function () {
    percentualCusto = parseFloat(this.value) || 0;
    document.getElementById('cenarioPercentualCusto').textContent = `${percentualCusto.toFixed(2)}`;
    
  });

  document.getElementById('despesaFixaInput').addEventListener('input', function () {
    despesaFixa = parseFloat(this.value) || 0;
    document.getElementById('cenarioDespesaFixa').textContent = formatarValorMonetario(despesaFixa);
    
  });

  document.getElementById('receitaMensalInput').addEventListener('input', function () {
    receitaMensal = parseFloat(this.value) || 0;
    document.getElementById('cenarioReceitaMensal').textContent = formatarValorMonetario(receitaMensal);
    
  });

  document.getElementById('porcentagemLucroInput').addEventListener('input', function () {
    porcentagemLucro = parseFloat(this.value) || 0;
    document.getElementById('cenarioPorcentagemLucro').textContent = `${porcentagemLucro.toFixed(2)}`;
    
  });

  document.getElementById('unidadeVariavel').addEventListener('input', function () {
    unidadeVariavel = parseFloat(this.value) || 0;
    cenarioVariavel();
    graficoVariavel();
  });

  

  document.addEventListener("DOMContentLoaded", function () {
    // Adiciona o event listener ao botão de calcular
    document.getElementById("btn-calcular").addEventListener("click", function () {
      var pontoEquilibrio = calculaPontoEquilibrio();
      unidadeVariavel= document.getElementById('unidadeVariavel').value = pontoEquilibrio.pontoEquilibrioUnidade;
      cenarioVariavel();  
      calcularPrecoVenda(); // Chama a função para calcular o preço de venda
      //calculaPontoEquilibrio();
      cenarioFixo();
        
      //graficoFixo();
    });
});

  // Função para calcular e exibir o preço de venda
  function calcularPrecoVenda() {
    // Verifique se os valores estão definidos
    if (!custoDeAquisicao || !percentualCusto || !despesaFixa || !receitaMensal || !porcentagemLucro) {
      // Não calcule se algum valor estiver faltando
      return;
    }

    // Converta as percentagens para a forma decimal
    var CV = percentualCusto / 100;
    var ML = porcentagemLucro / 100;
    var DF = (despesaFixa / receitaMensal);

    // Evite divisão por zero ou percentagem inválida
    if (receitaMensal === 0 || 1 - (CV + DF + ML) <= 0) {
      document.getElementById('precoVenda').textContent = "Valor fora do cálculo ou negativo";
      return;
    }

    // Cálculo do preço de venda
    var precoVenda = (custoDeAquisicao / (1 - (CV + DF + ML)));
    document.getElementById('precoVenda').textContent = formatarValorMonetario(precoVenda);
    document.getElementById('precoVenda1').textContent = formatarValorMonetario(precoVenda);
    
    var cemPorCento = 100;
    // Atualiza os elementos na nova seção com os valores calculados
    document.getElementById('cenarioCustoAquisicao').textContent = formatarValorMonetario(custoDeAquisicao);
    document.getElementById('cenarioPercentualCusto').textContent = `${percentualCusto.toFixed(2)}`;
    document.getElementById('cenarioDespesaFixa').textContent = formatarValorMonetario(despesaFixa);
    document.getElementById('cenarioReceitaMensal').textContent = formatarValorMonetario(receitaMensal);
    document.getElementById('cenarioPorcentagemLucro').textContent = `${porcentagemLucro.toFixed(2)}`;
    document.getElementById('precoVenda').textContent = formatarValorMonetario(precoVenda);
    document.getElementById('cenarioCustoAquisicao1').textContent = formatarValorMonetario(custoDeAquisicao);
    document.getElementById('cemPorCento').textContent = `${cemPorCento.toFixed(0)}%`;
    document.getElementById('cemPorCento1').textContent = `${cemPorCento.toFixed(0)}%`;
    
    return {
      precoVenda: precoVenda,
      CV: CV,
      DF: DF, 
      ML: ML
    };

  }
  // Funções `calculaPontoEquilibrio`, `cenarioFixo`, `cenarioVariavel`, `graficoFixo` e `graficoVariavel` seguem lógicas específicas para cálculos e visualizações adicionais, baseando-se nos valores de entrada e nos resultados de `calcularPrecoVenda`.
  function calculaPontoEquilibrio() {
    var resultado = calcularPrecoVenda();
      if (!resultado) return;

      var custoVariavelUnidade = resultado.CV * resultado.precoVenda;
      var margemContribuicao = resultado.precoVenda - custoDeAquisicao - custoVariavelUnidade;
      var porcentagemMargemContribruicao = margemContribuicao / resultado.precoVenda;
      var pontoEquilibrioReal = despesaFixa / porcentagemMargemContribruicao;
      var pontoEquilibrioUnidade = pontoEquilibrioReal / resultado.precoVenda;

      // Função para arredondar o ponto de equilíbrio em unidades
      function arredondarPontoEquilibrio(peUnidade) {
        var parteInteira = Math.floor(peUnidade);
        var parteDecimal = peUnidade - parteInteira;

        if (parteDecimal > 0.01) {
          return Math.ceil(peUnidade); // Arredonda para o próximo número inteiro.
        } else {
          return parteInteira; // Mantém o inteiro atual, pois a parte decimal não excede 0,20.
        }
      }

  // Aplicando a função de arredondamento ao pontoEquilibrioUnidade
  pontoEquilibrioUnidade = arredondarPontoEquilibrio(pontoEquilibrioUnidade);
    document.getElementById('pontoEquilibrioReal').textContent = formatarValorMonetario(pontoEquilibrioReal);
    document.getElementById('pontoEquilibrioUnidade').textContent = `${pontoEquilibrioUnidade.toFixed(0)}`;
  
    return {
      pontoEquilibrioUnidade: pontoEquilibrioUnidade
    }
  }

  

  function cenarioFixo(){

    var resultado = calcularPrecoVenda();
    var custoVariavelFixo = resultado.CV * resultado.precoVenda;
    var custoAquisicaoFixo = (custoDeAquisicao / resultado.precoVenda) * 100;
    var custoVariavelFixoPorcentagem = (custoVariavelFixo / resultado.precoVenda) * 100;
    var margemContribuicaoFixa = resultado.precoVenda - custoDeAquisicao - custoVariavelFixo;
    var margemContribuicaoFixaPorcentagem = (margemContribuicaoFixa / resultado.precoVenda) * 100;
    var porcentagemDespesaFixaFixo = resultado.DF * resultado.precoVenda;
    var porcentagemDespesaFixaFixoPorcento = (porcentagemDespesaFixaFixo / resultado.precoVenda) * 100;
    var margemLucroFixo = margemContribuicaoFixa - porcentagemDespesaFixaFixo;
    var margemLucroFixoPorcentagem = (margemLucroFixo / resultado.precoVenda) * 100;
    var markup = 1 / (1 - (resultado.CV + resultado.DF + resultado.ML));


    document.getElementById('custoVariavelFixo').textContent = formatarValorMonetario(custoVariavelFixo);
    document.getElementById('custoAquisicaoFixo').textContent = `${custoAquisicaoFixo.toFixed(2)}%`;
    document.getElementById('custoVariavelFixoPorcentagem').textContent = `${custoVariavelFixoPorcentagem.toFixed(2)}%`;
    document.getElementById('margemContribuicaoFixa').textContent = formatarValorMonetario(margemContribuicaoFixa);
    document.getElementById('margemContribuicaoFixaPorcentagem').textContent = `${margemContribuicaoFixaPorcentagem.toFixed(2)}%`;
    document.getElementById('porcentagemDespesaFixaFixo').textContent = formatarValorMonetario(porcentagemDespesaFixaFixo);    
    document.getElementById('porcentagemDespesaFixaFixoPorcento').textContent = `${porcentagemDespesaFixaFixoPorcento.toFixed(2)}%`;
    document.getElementById('margemLucroFixo').textContent = formatarValorMonetario(margemLucroFixo);
    document.getElementById('margemLucroFixo1').textContent = formatarValorMonetario(margemLucroFixo);  
    document.getElementById('margemLucroFixoPorcentagem').textContent = `${margemLucroFixoPorcentagem.toFixed(2)}%`;
    document.getElementById('margemLucroFixoPorcentagem1').textContent = `${margemLucroFixoPorcentagem.toFixed(2)}%`;
    document.getElementById('markup').textContent = `${markup.toFixed(2)}`;

    return {
      margemLucroFixoPorcentagem: margemLucroFixoPorcentagem,
      custoAquisicaoFixo: custoAquisicaoFixo,
      custoVariavelFixo: custoVariavelFixo,
      custoVariavelFixoPorcentagem: custoVariavelFixoPorcentagem,
      porcentagemDespesaFixaFixoPorcento: porcentagemDespesaFixaFixoPorcento,
      markup: markup
    }


  }

  function cenarioVariavel() {
    var PV = calcularPrecoVenda();
    var CF = cenarioFixo();
    var precoVendaVariavel = PV.precoVenda * unidadeVariavel;
    var custoAquisicaoVariavel = custoDeAquisicao * unidadeVariavel;
    var custoAquisicaoVariavelPorcentagem =  (custoAquisicaoVariavel / precoVendaVariavel) * 100;
    var custoVariavelVariavel = CF.custoVariavelFixo * unidadeVariavel;
    var porcentagemCustoVariavel = (custoVariavelVariavel / precoVendaVariavel) * 100;
    var margemContribuicaoVariavel = precoVendaVariavel - custoAquisicaoVariavel - custoVariavelVariavel;
    var margemContribuicaoVariavelPorcentagem = (margemContribuicaoVariavel / precoVendaVariavel) * 100;
    var PE = calculaPontoEquilibrio();
    var porcentagemDespesaFixaVariavel;
    if (unidadeVariavel<PE.pontoEquilibrioUnidade) {
      porcentagemDespesaFixaVariavel = PV.DF * precoVendaVariavel;
    } else {
      porcentagemDespesaFixaVariavel = despesaFixa
    }
    var porcentagemDespesaFixaVariavelPorcento = (porcentagemDespesaFixaVariavel / precoVendaVariavel) * 100;
    var margemLucroVariavel = margemContribuicaoVariavel - despesaFixa;
    var margemLucroVariavelPorcentagem = (margemLucroVariavel / precoVendaVariavel) * 100;
    var markup2 = CF.markup;

    document.getElementById('precoVendaVariavel').textContent = formatarValorMonetario(precoVendaVariavel);
    document.getElementById('custoAquisicaoVariavel').textContent = formatarValorMonetario(custoAquisicaoVariavel);
    document.getElementById('custoAquisicaoVariavelPorcentagem').textContent = `${custoAquisicaoVariavelPorcentagem.toFixed(2)}%`;
    document.getElementById('custoVariavelVariavel').textContent = formatarValorMonetario(custoVariavelVariavel);
    document.getElementById('porcentagemCustoVariavel').textContent = `${porcentagemCustoVariavel.toFixed(2)}%`;
    document.getElementById('margemContribuicaoVariavel').textContent = formatarValorMonetario(margemContribuicaoVariavel);
    document.getElementById('margemContribuicaoVariavelPorcentagem').textContent = `${margemContribuicaoVariavelPorcentagem.toFixed(2)}%`;
    document.getElementById('porcentagemDespesaFixaVariavel').textContent = formatarValorMonetario(porcentagemDespesaFixaVariavel);    
    document.getElementById('porcentagemDespesaFixaVariavelPorcento').textContent = `${porcentagemDespesaFixaVariavelPorcento.toFixed(2)}%`;
    document.getElementById('margemLucroVariavel').textContent = formatarValorMonetario(margemLucroVariavel);    
    document.getElementById('margemLucroVariavelPorcentagem').textContent = `${margemLucroVariavelPorcentagem.toFixed(2)}%`;
    document.getElementById('margemLucroVariavel2').textContent = formatarValorMonetario(margemLucroVariavel);    
    document.getElementById('margemLucroVariavelPorcentagem2').textContent = `${margemLucroVariavelPorcentagem.toFixed(2)}`;
    document.getElementById('markup2').textContent = `${markup2.toFixed(2)}`;
    

    return {
      margemLucroVariavelPorcentagem: margemLucroVariavelPorcentagem,
      custoAquisicaoVariavelPorcentagem: custoAquisicaoVariavelPorcentagem,
      porcentagemCustoVariavel: porcentagemCustoVariavel,
      porcentagemDespesaFixaVariavelPorcento: porcentagemDespesaFixaVariavelPorcento
    }
  }

  function graficoFixo() {
    var resultado = cenarioFixo();
    var data = google.visualization.arrayToDataTable([
      ['Tipo', 'Valor'],
      ['Margem de Lucro', resultado.margemLucroFixoPorcentagem],
      ['Custo Aquisição',      resultado.custoAquisicaoFixo],
      ['Custo Variável',  resultado.custoVariavelFixoPorcentagem],
      ['Despesa Fixa', resultado.porcentagemDespesaFixaFixoPorcento]
    ]);
    
    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      width:400,
      height:300,
      pieSliceText: 'label', // Mostra o nome do segmento 
      pieSliceTextStyle: {
        color: 'black',
      },    
      legend: 'none', // Isso remove a legenda
      chartArea: {
        left: 50, // Isso define o espaço à esquerda do gráfico
        top: 0, // Isso define o espaço no topo do gráfico
        height: '90%'
      },
      colors: ['#ff3366', '#ff6699', '#ff99cc', '#cc66cc'],
      fontName: 'OpenSans-Regular'
    };

    var chart = new google.visualization.PieChart(document.getElementById('graficoMargemLucro'));
    chart.draw(data, options);
  }

  function graficoVariavel() {
    var resultado2 = cenarioVariavel();
    var data = google.visualization.arrayToDataTable([
      ['Tipo', 'Valor'],
      ['Margem de Lucro', resultado2.margemLucroVariavelPorcentagem],
      ['Custo Aquisição',      resultado2.custoAquisicaoVariavelPorcentagem],
      ['Custo Variável',  resultado2.porcentagemCustoVariavel],
      ['Despesa Fixa', resultado2.porcentagemDespesaFixaVariavelPorcento]
    ]);

    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      width:400,
      height:300,
      pieSliceText: 'label', // Mostra o nome do segmento 
      pieSliceTextStyle: {
        color: 'black',
      },    
      legend: 'none', // Isso remove a legenda
      chartArea: {
        left: 50, // Isso define o espaço à esquerda do gráfico
        top: 0, // Isso define o espaço no topo do gráfico
        height: '90%'
      },
      colors: ['#ff3366', '#ff6699', '#ff99cc', '#cc66cc'],
      fontName: 'OpenSans-Regular'
    };

    var chart = new google.visualization.PieChart(document.getElementById('graficoMargemLucroVariavel'));
    chart.draw(data, options);
  }


  