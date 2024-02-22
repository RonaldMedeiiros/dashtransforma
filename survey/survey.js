const surveyJson = {
    pages: [{
        elements: [{
            name: "satisfaction-score",
            title: "Como você descreve a sua satisfação com nosso produto?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Totalmente satisfeito" },
                { value: 4, text: "Satisfeito" },
                { value: 3, text: "Neutro" },
                { value: 2, text: "Insatisfeito" },
                { value: 1, text: "Totalmente insatisfeito" }
            ],
            isRequired: true
        }]
    }, {
        elements: [{
            name: "what-would-make-you-more-satisfied",
            title: "O que podemos fazer para tornar sua experiência mais satisfatória?",
            type: "comment",
            visibleIf: "{satisfaction-score} = 4"
        }, {
            name: "nps-score",
            title: "Em uma escala de zero a dez, qual é a probabilidade de você recomendar nosso produto a um amigo ou colega?",
            type: "rating",
            rateMin: 0,
            rateMax: 10
        }],
        visibleIf: "{satisfaction-score} >= 4"
    }, {
        elements: [{
            name: "how-can-we-improve",
            title: "Na sua opinião, como poderíamos melhorar nosso produto?",
            type: "comment"
        }],
        visibleIf: "{satisfaction-score} = 3"
    }, {
        elements: [{
            name: "disappointing-experience",
            title: "Informe-nos por que você teve uma experiência tão decepcionante com nosso produto",
            type: "comment"
        }],
        visibleIf: "{satisfaction-score} =< 2"
    }],
    showQuestionNumbers: "off",
};
  
  const survey = new Survey.Model(surveyJson);  

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});