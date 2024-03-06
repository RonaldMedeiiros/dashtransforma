function estrategia1() {
    var dropdown = document.getElementById("frases1");
    var resposta = document.getElementById("resposta1");
  
    var frases = [  "Elabore o modelo de negócios da empresa, definindo com clarezas suas diretrizes. Sugere-se a utilização do modelo canvas.", 
                    "Defina os pontos faltantes quanto às diretrizes. Ex: Defina quem é o público para o qual a empresa prestará serviços ou venderá seus produtos.", 
                    "Defina qual será o diferencial da sua empresa frente aos concorrentes.", 
                    "Ótimo! Empresa completa nesse quesito."];
  
    var indice = dropdown.value;
    resposta.textContent = frases[indice];
  
    // Definindo a pontuação
    var pontuacaoEstrategia1 = (parseInt(indice) + 1) * 25; // Calculando a pontuação
    resultadoEstrategia1 =resposta.textContent += " Pontuação: " + pontuacaoEstrategia1 + "%";
    return {
      pontuacaoEstrategia1: pontuacaoEstrategia1
    }
  }

  function estrategia2() {
    var dropdown = document.getElementById("frases2");
    var resposta = document.getElementById("resposta2");
  
    var frases = [  "Realize uma reunião com os cargos de lideranças (ou principais membros da equipe) com finalidade de  definir os principais pontos da empresa: missão, valores, visão, como alcançar  essa visão, como demais..", 
                    "Realize o seu planejamento estratégico formalmente e com periodicidade definida.",  
                    "Realize o seu planejamento estratégico com participação dos colaboradores de diferentes níveis hierárquicos.", 
                    "Ótimo! Empresa completa nesse quesito."];
  
    var indice = dropdown.value;
    resposta.textContent = frases[indice];
  
    // Definindo a pontuação
    var pontuacaoEstrategia2 = (parseInt(indice) + 1) * 25; // Calculando a pontuação
    resultadoEstrategia2 = resposta.textContent += " Pontuação: " + pontuacaoEstrategia2 + "%";
    return {
      pontuacaoEstrategia2: pontuacaoEstrategia2
    }
  }

  function estrategia3() {
    var dropdown = document.getElementById("frases3");
    var resposta = document.getElementById("resposta3");
  
    var frases = [  "Inclua uma análise para a formulação estratégia. . Além disso, você deve buscar dados registrados em pesquisas e análises de mercado, isso ajudará a subsidiar suas decisões com informações.", 
                    "Liste e analise todos os pontos que envolvem seu negócio, definindo o que necessitam de atenção para serem minimizados/eliminados, e os quais se destacam como diferenciais positivos e que devem ser potencializados.",  
                    "Envolva os colaboradores na elaboração das análises interna e externa.", 
                    "Ótimo! Empresa completa nesse quesito."];
  
    var indice = dropdown.value;
    resposta.textContent = frases[indice];
  
    // Definindo a pontuação
    var pontuacaoEstrategia3 = (parseInt(indice) + 1) * 25; // Calculando a pontuação
    resultadoEstrategia3 = resposta.textContent += " Pontuação: " + pontuacaoEstrategia3 + "%";
    return {
      pontuacaoEstrategia3: pontuacaoEstrategia3
    }
  }

  function estrategia4() {
    var dropdown = document.getElementById("frases4");
    var resposta = document.getElementById("resposta4");
  
    var frases = [  "Procure fazer mais pelo meio ambiente e pela sociedade, além de benefícios para o mesmo; melhora a imagem da empresa perante seus stekholders.", 
                    "Crie uma política interna de proteção aos clientes e consumidores. Faz parte de suas atribuições promover ações que melhorem a credibilidade, a eficiência e a segurança dos produtos e serviços.",  
                    " Invista em ações próprias. A relação que uma empresa tem com sua comunidade de entorno é um dos principais exemplos dos valores com os quais está comprometida.", 
                    "Ótimo! Empresa completa nesse quesito."];
  
    var indice = dropdown.value;
    resposta.textContent = frases[indice];
  
    // Definindo a pontuação
    var pontuacaoEstrategia4 = (parseInt(indice) + 1) * 25; // Calculando a pontuação
    resultadoEstrategia4 = resposta.textContent += " Pontuação: " + pontuacaoEstrategia4 + "%";
    return {
      pontuacaoEstrategia4: pontuacaoEstrategia4
    }
  }

  function pontuacaoFinalEstrategia() {
    var pontuacao1 = estrategia1();
    var pontuacao2 = estrategia2();
    var pontuacao3 = estrategia3();
    var pontuacao4 = estrategia4();
  
    // Verificando se os valores são números antes de somá-los
    if (isNaN(pontuacao1) || isNaN(pontuacao2) || isNaN(pontuacao3) || isNaN(pontuacao4)) {
      console.error("Pontuação inválida.");
      return;
    }
  
    var somaPontos = pontuacao1 + pontuacao2 + pontuacao3 + pontuacao4;
    document.getElementById('pontuacaoFinalEstrategia').textContent = `Pontuação final: ${somaPontos.toFixed(0)}%`;
  }
  