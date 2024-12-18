// Define the questions array
const questions = [
    {
        question: "Quel sport est considéré le plus populaire dans le monde?",
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
    {
        question: "Which team won the last World Hockey Championship?",
        optionA: "Russie",
        optionB: "Tchéquie",
        optionC: "États-Unis",
        optionD: "Canada",
        correctOption: "optionB",
    },
    {
        question: "Quelle distance parcourent les participants au marathon ?",
        optionA: "10 kilomètres",
        optionB: "21 kilomètres",
        optionC: "42,195 kilomètres",
        optionD: "100 kilomètres",
        correctOption: "optionC",
    },
    {
        question: "In what country was boxer Muhammad Ali born?",
        optionA: "United States",
        optionB: "United Kingdom",
        optionC: "Canada",
        optionD: "Jamaica",
        correctOption: "optionA",
    },
    // Add more questions here as necessary
];

let questionNumber = 1;
let playerScore = 0;
let indexNumber = 0;

// Display question function
function displayQuestion(index) {
    const currentQuestion = questions[index];
    document.getElementById("question-number").innerText = `Question ${questionNumber}`;
    document.getElementById("player-score").innerText = `Score ${playerScore}`;
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

// Check if the answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const currentQuestion = questions[indexNumber];
    
    if (selectedOption) {
        const isCorrect = selectedOption.value === currentQuestion.correctOption;

        if (isCorrect) {
            playerScore++;
            alert("Bonne Réponse!");
        } else {
            const correctLabel = document.getElementById(currentQuestion.correctOption + "-label");
            alert("Non! La bonne réponse est: " + correctLabel.innerText);
        }

        // Move to next question immediately after feedback (without waiting)
        handleNextQuestion();
    }
}

// Move to the next question
function handleNextQuestion() {
    indexNumber++;
    questionNumber++;

    // Check if there are more questions
    if (indexNumber < questions.length) {
        displayQuestion(indexNumber);
    } else {
        alert(`Quiz over! Your score: ${playerScore}/${questions.length}`);
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
