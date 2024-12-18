const questions = [
    {
        question: "Quel sport est considéré le plus populaire dans le monde ?",
        optionA: "Soccer",
        optionB: "Tennis",
        optionC: "Golf",
        optionD: "Basketball",
        correctOption: "optionA",
    },
    {
        question: "Les Jeux olympiques ont lieu tous les combien d'années ?",
        optionA: "2 ans",
        optionB: "4 ans",
        optionC: "6 ans",
        optionD: "8 ans",
        correctOption: "optionB",
    },
    // Add other questions as needed
];

let questionNumber = 1;
let playerScore = 0;
let indexNumber = 0;

// Display question function
function displayQuestion(index) {
    const currentQuestion = questions[index];
    document.getElementById("question-number").innerText = `Question ${questionNumber}`;
    document.getElementById("player-score").innerText = `Score: ${playerScore}`;
    document.getElementById("display-question").innerText = currentQuestion.question;
    document.getElementById("option-one-label").innerText = currentQuestion.optionA;
    document.getElementById("option-two-label").innerText = currentQuestion.optionB;
    document.getElementById("option-three-label").innerText = currentQuestion.optionC;
    document.getElementById("option-four-label").innerText = currentQuestion.optionD;

    // Deselect the radio buttons when a new question is loaded
    const options = document.querySelectorAll('input[name="option"]');
    options.forEach(option => {
        option.checked = false; // Deselect all options
    });
}

// Show feedback in modal
function showFeedback(isCorrect) {
    const feedbackModal = document.getElementById("feedback-modal");
    const feedbackMessage = document.getElementById("feedback-message");

    if (isCorrect) {
        feedbackMessage.innerText = "Bonne réponse!";
    } else {
        feedbackMessage.innerText = "Mauvaise réponse!";
    }

    feedbackModal.style.display = "flex";  // Show modal
}

// Close the feedback modal and move to the next question
function closeFeedbackModal() {
    const feedbackModal = document.getElementById("feedback-modal");
    feedbackModal.style.display = "none";

    // Move to the next question
    indexNumber++;
    questionNumber++;

    // Check if there are more questions
    if (indexNumber < questions.length) {
        displayQuestion(indexNumber);
    } else {
        showFinalScore();
    }
}

// Show the final score modal when the quiz is complete
function showFinalScore() {
    const scoreModal = document.getElementById("score-modal");
    document.getElementById("right-answers").innerText = playerScore;
    document.getElementById("attempts-count").innerText = questions.length;
    document.getElementById("wrong-answers").innerText = questions.length - playerScore;
    document.getElementById("grade-percentage").innerText = Math.round((playerScore / questions.length) * 100);
    
    scoreModal.style.display = "flex";  // Show modal
}

// Close the final score modal
function closeScoreModal() {
    const scoreModal = document.getElementById("score-modal");
    scoreModal.style.display = "none";
}

// Check if the answer is correct and show feedback
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const currentQuestion = questions[indexNumber];
    
    if (selectedOption) {
        const isCorrect = selectedOption.value === currentQuestion.correctOption;

        if (isCorrect) {
            playerScore++;
        }

        // Show feedback modal
        showFeedback(isCorrect);
    }
}

// Wait for DOM to load before executing the script
window.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the first question
    displayQuestion(indexNumber);

    // Attach event listeners to the radio buttons
    const options = document.querySelectorAll('input[name="option"]');
    options.forEach((option) => {
        option.addEventListener('change', (event) => {
            checkAnswer(); // Call checkAnswer when a radio button is selected
        });
    });
});
