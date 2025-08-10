alert("Script linked successfully!");
const questions = [
    {
        question: "Do u love me???",
        gifUrl: "images/Cat Love GIF by NGcorpvtc.gif"
    },
    {
        question: "Ik u dont love me,y???",
              gifUrl: "images/Mad Coffee GIF.gif" 
          },
    {
        question: "of u love me or not i love u,understand???",
        gifUrl: "images/Mad Grumpy Cat GIF by MOODMAN.gif"
     },
    {
        question: "will u marry mee???",
        gifUrl: "images/Mad Coffee GIF.gif"
    },
    {
        question: "please????",
        gifUrl: "images/Happy I Love You GIF by Pembe.gif"
    },
    {
        question: "thnkuuuuu<<<<<<3333",
         gifUrl: "images/Mad Coffee GIF.gif"
    };
let currentIndex = 0;

const questionElement = document.getElementById("question");
const gifElement = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const noBtn = document.getElementById("noBtn");

function showQuestion() {
    const current = questions[currentIndex];
    questionElement.textContent = current.text;
    gifElement.src = current.gif;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= questions.length) {
        questionElement.textContent = "Thanks for answering!";
        gifElement.src = "";
        yesBtn.disabled = true;
        maybeBtn.disabled = true;
        noBtn.disabled = true;
    } else {
        showQuestion();
    }
}

yesBtn.addEventListener("click", nextQuestion);
maybeBtn.addEventListener("click", nextQuestion);
noBtn.addEventListener("click", nextQuestion);

showQuestion();