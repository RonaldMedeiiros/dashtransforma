const json = {
  "elements": [
    {
      "type": "dropdown",
      "name": "firstquestion",
      "title": "A empresa possui diretrizes estratégicas bem definidas e disseminadas por toda a empresa?",
      "isRequired": true,
      "showNoneItem": false,
      "showOtherItem": false,
      "choices": ["A empresa não possui negócio definido ou compreendido por toda a empresa.",
        "Nem todas as diretrizes estão definidas. Ex: a empresa sabe sua missão, mas não o seu público alvo.",
        "A empresa ainda não tem clareza sobre o seu diferencial de valor.",
        "A empresa possui diretrizes bem definidas, as quais são de conhecimento em todos os níveis da mesma."
      ],
      "placeholder": "Escolha uma opção"
    },
    {
      "type": "panel",
      "name": "resposta1",
      "visible": false,
      "visibleIf": "{firstquestion} = 'A empresa não possui negócio definido ou compreendido por toda a empresa.'",
      "elements": [
        {
          "type": "html",
          "name": "instruction",
          "html": "Elabore o modelo de negócios da empresa, definindo com clarezas suas diretrizes. Sugere-se a utilização do modelo canvas. {porcentagem}"
        }
      ]
    },
    {
      "type": "panel",
      "name": "resposta2",
      "visible": false,
      "visibleIf": "{firstquestion} = 'Nem todas as diretrizes estão definidas. Ex: a empresa sabe sua missão, mas não o seu público alvo.'",
      "elements": [
        {
          "type": "html",
          "name": "instruction",
          "html": "Defina os pontos faltantes quanto às diretrizes. Ex: Defina quem é o público para o qual a empresa prestará serviços ou venderá seus produtos."
        }
      ]
    },
    {
      "type": "panel",
      "name": "resposta3",
      "visible": false,
      "visibleIf": "{firstquestion} = ' A empresa ainda não tem clareza sobre o seu diferencial de valor.'",
      "elements": [
        {
          "type": "html",
          "name": "instruction",
          "html": "Defina qual será o diferencial da sua empresa frente aos concorrentes."
        }
      ]
    },
    {
      "type": "panel",
      "name": "resposta4",
      "visible": false,
      "visibleIf": "{firstquestion} = 'A empresa possui diretrizes bem definidas, as quais são de conhecimento em todos os níveis da mesma.'",
      "elements": [
        {
          "type": "html",
          "name": "instruction",
          "html": "Ótimo! Empresa completa nesse quesito."
        }
      ]
    },
    {
      "type": "expression",
      "name": "porcentagem",
      "title": "Peso da Pergunta:",
      "expression": "if({resposta1.visible}, 25, 0)",
      "displayStyle": "currency"
    }
  ]
}/*Final da página para acrescentar outra, adicione uma virgula e abre novas aspas com os elementos*/
  ;


const survey = new Survey.Model(json);
survey.applyTheme(SurveyTheme.LayeredLight);
survey.onComplete.add((sender, options) => {
  console.log(JSON.stringify(sender.data, null, 3));
});

$("#surveyElement").Survey({ model: survey });