const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');
const resultText = document.getElementById('result-text');
const resultMessage = document.getElementById('result-message');

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
});

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            if (answer.correct) {
                score++;
            }
            nextButton.disabled = false;
        });
        answerButtons.appendChild(button);
    });

    nextButton.disabled = true;
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.innerText = score;

    if (score >= 2) { // Adjust the threshold as needed
        resultMessage.innerText = "Congratulations! You're a winner!";
    } else {
        resultMessage.innerText = "You can try again next time!";
    }
}

showQuestion(questions[currentQuestionIndex]);
