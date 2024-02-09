const perguntas = [
    {
        pergunta: "Qual é o nome do protagonista da série Ben 10?",
        respostas: [
            "Ben Tennyson",
            "Max Tennyson",
            "Gwen Tennyson"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do relógio alienígena que Ben encontra, que lhe permite se transformar em diferentes alienígenas?",
        respostas: [
            "Ultimatrix",
            "Omnitrix",
            "Omniverse"
        ],
        correta: 1
    },
    {
        pergunta: "Quantas formas alienígenas diferentes Ben pode se transformar usando o Omnitrix?",
        respostas: [
            "10",
            "20",
            "100"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do avô de Ben que o acompanha em suas aventuras?",
        respostas: [
            "Phil Billings",
            "Frank Tennyson",
            "Max Tennyson"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da prima de Ben, que também o acompanha em suas aventuras?",
        respostas: [
            "Gwen Tennyson",
            "Kai Green",
            "Jennifer Nocturne"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do vilão principal na série Ben 10?",
        respostas: [
            "Vilgax",
            "Kevin Levin",
            "Hex"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do melhor amigo de Ben, que também é seu parceiro de equipe em várias ocasiões?",
        respostas: [
            "Kevin Levin",
            "Rook Blonko",
            "Gwen Tennyson"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da nave espacial que Ben, Gwen e Kevin usam para viajar pelo espaço?",
        respostas: [
            "Nave Rustbucket",
            "Nave Condor",
            "Nave Plumber"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da cidade onde Ben mora?",
        respostas: [
            "Bellwood",
            "Townsville",
            "Rustboro"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a idade de Ben quando ele encontra o Omnitrix pela primeira vez?",
        respostas: [
            "10 anos",
            "12 anos",
            "14 anos"
        ],
        correta: 0
    }
];


const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta

      for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => { 
           const estaCorreta = event.target.value == item.correta

           corretas.delete(item)
           if(estaCorreta){
               corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
      }
    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem);
}