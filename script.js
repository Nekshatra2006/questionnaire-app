const questions = [
    {
        question: " Do you love me?",
    },
    {
        question: " I know you dont love me,Why?",
    },
    {
        question: "if u love me oru not I love u ,is it ok???",
    },
    {
        question: "will you marry me????",
    },
    {
        question: "please????",
    },
];

let currentQuestionIndex = 0;
const questionTextElement = document.getElementById('question-text');
const questionContainer = document.getElementById('question-container');
const endStatementElement = document.getElementById('end-statement');
const finalMessageElement = document.getElementById('final-message');

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionTextElement.textContent = questions[currentQuestionIndex].question;
    } else {
        showEndStatement();
    }
}

function nextQuestion(answer) {
    console.log(`Answer to question ${currentQuestionIndex + 1}: ${answer}`); // For debugging

    currentQuestionIndex++;
    showQuestion();
}

function showEndStatement() {
    questionContainer.style.display = 'none';
    endStatementElement.style.display = 'block';

    finalMessageElement.textContent = "Thank you for answering the questions!";
}

// Start the quiz when the page loads
showQuestion();