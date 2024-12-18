let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const timerDuration = 45;
let timeLeft = timerDuration;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options");
const questionText = document.getElementById("question");
const nextButton = document.getElementById("next-question");
const scoreContainer = document.getElementById("score-container");
const finalScoreText = document.getElementById("final-score");
const timerDisplay = document.getElementById("timer");

async function fetchQuestions() {
    try {
        const response = await fetch("http://localhost:8082/quiz/get");
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!data || data.length === 0) {
            throw new Error("No questions available");
        }
        questions = data;

        // Show the quiz container and start the quiz
        questionContainer.style.display = "block";
        showNextQuestion();
    } catch (error) {
        console.error("Error fetching questions:", error);
        alert("Failed to load questions. Please try again later.");
    }
}

function showNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showScore();
        return;
    }

    resetTimer();
    startTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.questionText;

    optionsContainer.innerHTML = "";
    const options = [
        currentQuestion.optionA,
        currentQuestion.optionB,
        currentQuestion.optionC,
        currentQuestion.optionD,
    ];

    options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => selectOption(button, index, currentQuestion.correctAnswer));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectOption(button, index, correctAnswer) {
    const allButtons = document.querySelectorAll(".option-button");
    allButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    clearInterval(timerInterval);

    if (button.textContent === correctAnswer) {
        score++;
    }

    nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    showNextQuestion();
});

function showScore() {
    questionContainer.style.display = "none";
    scoreContainer.style.display = "block";
    timerDisplay.style.display = "none";
    finalScoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

function startTimer() {
    timeLeft = timerDuration;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            currentQuestionIndex++;
            showNextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerDisplay.textContent = `Time Left: ${timerDuration}s`;
}

// Start the quiz immediately when the page loads
window.onload = () => {
    fetchQuestions();
};
