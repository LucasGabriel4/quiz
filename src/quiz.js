const characterPhoto = document.querySelector('[data-js="character-photo"]')
const questionText = document.querySelector('[data-js="question"]')
const alternativesContainer = document.querySelector('[data-js="alternatives"]')
const nextButton = document.querySelector('[data-js="next-button"]')



const questionsQuiz = [
    {
       question: 'Qual é o nome desse personagem na franquia Street Fighter?',
       characterImage: './img/Ryu.webp',
       answers: [
          {text: 'Ryu', correct: true},
          {text: 'Ken', correct: false},
          {text: 'Vega', correct: false},
          {text: 'Guile', correct: false},
       ]
    },


    {
        question: 'Qual é o nome desse personagem na franquia Street Fighter?',
        characterImage: './img/vega.jfif',
        answers: [
           {text: 'Cammy', correct: false},
           {text: 'Ken', correct: false},
           {text: 'Vega', correct: true},
           {text: 'Adon', correct: false},
        ]
     },

     {
        question: 'Qual é o nome desse personagem na franquia Street Fighter?',
        characterImage: './img/Balrog.webp',
        answers: [
           {text: 'Balrog', correct: true},
           {text: 'Ken', correct: false},
           {text: 'Sagat', correct: false},
           {text: 'Mike Tyson', correct: false},
        ]
     },

     {
        question: 'Qual é o nome desse personagem na franquia Street Fighter?',
        characterImage: './img/Bison.webp',
        answers: [
           {text: 'Rolento', correct: false},
           {text: 'Ken', correct: false},
           {text: 'Oni', correct: false},
           {text: 'Bison', correct: true},
        ]
     },

     {
        question: 'Em qual ano foi lançado o primeiro jogo da franquia Street Fighter?',
        answers: [
           {text: 2000, correct: false},
           {text: 1880, correct: false},
           {text: 1987, correct: true},
           {text: 1990, correct: false},
        ]
     },

     {
        question: 'Qual foram os criadores da franquia Street Fighter?',
        answers: [
           {text: 'Hiroshi Matsumoto, Takashi Nishiyama e Yoshiki Okamoto', correct: true},
           {text: 'Yoshinori Ono, Akira Nishitani e Hideaki Itsuno', correct: false},
           {text: 'Noritaka Funamizu e Tomoshi Sadamoto', correct: false},
           {text: 'Yusuke Hashimoto, Haruo Murata e David Sirlin', correct: false},
        ]
     },

     {
        question: 'Em que país foi criado o Street Fighter?',
        answers: [
           {text: 'Alemanha', correct: false},
           {text: 'China', correct: false},
           {text: 'Japão', correct: true},
           {text: 'Brasil', correct: false},
        ]
     },


     {
        question: 'Qual jogo da franquia Street Fighter vendeu mais?',
        answers: [
           {text: 'Street Fighter 4', correct: false},
           {text: 'Street Fighter 5', correct: true},
           {text: 'Street Fighter 6', correct: false},
           {text: 'Street Fighter alpha', correct: false},
        ]
     }

]



    nextButton.style.display = 'none'
    let currentIndex = 0;
    let score = 0;
    let dataQuestions = questionsQuiz[currentIndex];


  const addQuizAlternatives = (answer) => {
    const {text, correct} = answer;
    const button = document.createElement('button')
    button.classList.add('alternative')
    button.textContent = text;
    alternativesContainer.appendChild(button)
 
    if(correct){
      button.dataset.correct = correct;
    }

    button.addEventListener('click', checkAnswer)
  }


const showQuestions = ({question, characterImage, answers}) => {
    resetQuiz()
    let numberQuestion = currentIndex + 1;
    questionText.innerHTML = `${numberQuestion}. ${question}`

    if(characterImage){
        characterPhoto.setAttribute('style', `background-image: url('${characterImage}')`)
        characterPhoto.style.display = 'block'
    }
    
    answers.forEach(addQuizAlternatives)
}


const resetQuiz = () => {
    nextButton.style.display = 'none'
    alternativesContainer.innerHTML = '';
    characterPhoto.removeAttribute('style')
//   while(alternativesContainer.firstChild){
//      alternativesContainer.removeChild(alternativesContainer.firstChild)
//   }
}



const checkAnswer = (event) => {
    const Alternative = event.target;
    const correctAlternative = Alternative.dataset.correct;

    if(correctAlternative){
        Alternative.classList.add('correct')
        score++;
    }else{
        Alternative.classList.add('incorrect')
    }

    const arrAlternative = Array.from(alternativesContainer.children)

    arrAlternative.forEach((Alternative) => {
        const correctAlternative = Alternative.dataset.correct;
        if(correctAlternative){
            Alternative.classList.add('correct')
        }
    })

    nextButton.style.display = 'block';
    nextButton.addEventListener('click', nextQuestionQuiz)
}

const showScore = () => {
    resetQuiz()
    questionText.innerHTML = `Obrigado por participar :) você acertou ${score} perguntas!`
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'

}

const nextQuestion = () => {
    currentIndex++
    dataQuestions = questionsQuiz[currentIndex]; 
    nextButton.innerHTML = 'next'
    if(currentIndex < questionsQuiz.length){
        showQuestions(dataQuestions)
      }else{
          showScore()
      }
}

const startQuiz = () => {
    score = 0;
    currentIndex = 0;
    nextButton.innerHTML = 'next'
    dataQuestions = questionsQuiz[currentIndex]
    showQuestions(dataQuestions)
}

const nextQuestionQuiz = () => {

    if(currentIndex < questionsQuiz.length){
      nextQuestion()
    }else{
       startQuiz()
    }
   
} 




showQuestions(dataQuestions)


