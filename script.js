const questions = [
    {
        question: "Do u love me???",
        gifUrl: "images/Cat Love GIF by NGcorpvtc.gif" // Replace with your actual GIF path
    },
    {
        question: "Ik u dont love me,y???",
        gifUrl: "images/Mad Coffee GIF.gif" // Replace with your actual GIF path
    },
    {
        question: "of u love me or not i love u,understand???",
        gifUrl: "images/Mad Grumpy Cat GIF by MOODMAN.gif" // Replace with your actual GIF path

        gifUrl: "images/Mad Grumpy Cat GIF by MOODMAN.gif"" // Replace with your actual GIF path

    },
    {
        question: "will u marry mee???",
        gifUrl: "images/Mad Coffee GIF.gif" // Replace with your actual GIF path
    },
    { question: "please????",
<<<<<<< HEAD
        gifUrl: "images/Happy I Love You GIF by Pembe.gif" // Replace with your actual GIF path
=======
        gifUrl: "images/Mad Coffee GIF.gif" // Replace with your actual GIF path
>>>>>>> 6f6126a92c5bf20d30fba6e94a7f36a220ce9966
    },
];

let currentQuestionIndex = 0;
const questionTextElement = document.getElementById('question-text');
const questionContainer = document.getElementById('question-container');
const endStatementElement = document.getElementById('end-statement');
const finalMessageElement = document.getElementById('final-message');
const questionGifElement = document.getElementById('question-gif'); // Get the image element

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionTextElement.textContent = questions[currentQuestionIndex].question;
        questionGifElement.src = questions[currentQuestionIndex].gifUrl; // Set the GIF source
    } else {
        showEndStatement();
        questionGifElement.src = ""; // Optionally clear the GIF at the end
    }
}

function nextQuestion(answer) {
    console.log(`Answer to question ${currentQuestionIndex + 1}: ${answer}`);

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
