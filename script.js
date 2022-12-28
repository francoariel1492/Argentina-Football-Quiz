const quizData = [
    {
        question: 'How many golden balls does messi have?',
        a : 5,
        b : 7,
        c : 9,
        d : 1,
        correct: 'b'
    },
    {
        question: 'How many world cups does argentina have?',
        a : 2,
        b : 5,
        c : 1,
        d : 0,
        correct: 'a'
    }
    ,
    {
        question: 'Who was the author of the famous goal the "Hand of God" in the 86 World Cup?',
        a : "Burruchaga",
        b : "Ruggeri",
        c : "Passarella",
        d : "Maradona",
        correct: 'd'
    }
    ,
    {
        question: 'Who was the player that score 4 goals against argentina in the wold cup final 2022 of Qatar?',
        a : "Dembele",
        b : "Griezmann",
        c : "Mbappe",
        d : "Giroud",
        correct: 'c'
    }
    ,
    {
        question: 'Against which team argentina lost in the world cup 2022??',
        a : "Netherlands",
        b : "France",
        c : "Mexico",
        d : "Arabia Saudi",
        correct: 'd'
    }
]

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit')

let currentQuiz = 0;

loadQuiz();
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
}

function getSelected(){
    
}

submitBtn.addEventListener('click',() =>{
    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        alert('Thats the end of the Quiz, thanks to be part of it');
    }
})