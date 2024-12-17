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
    document.getElementById("player-score").innerText = `Score: ${playerScore}`;
    document.getElementById("display-question").innerText = currentQuestion.question;
    document.getElementById("option-one-label").innerText = currentQuestion.optionA;
    document.getElementById("option-two-label").innerText = currentQuestion.optionB;
    document.getElementById("option-three-label").innerText = currentQuestion.optionC;
    document.getElementById("option-four-label").innerText = currentQuestion.optionD;
}

// Check if answer is correct
function checkAnswer() {
    const currentQuestion = questions[indexNumber];
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const isCorrect = selectedOption.value === currentQuestion.correctOption;
        if (isCorrect) {
            playerScore++;
            alert("Bonne Réponse!");
        } else {
            const correctLabel = document.getElementById(currentQuestion.correctOption + "-label");
            if (correctLabel) {
                alert("Non! La bonne réponse est: " + correctLabel.innerText);
            } else {
                alert("Non! Ceci n'est pas la bonne réponse.");
            }
        }

        // Move to next question after one click
        handleNextQuestion();
    } else {
        alert("Please select an answer.");
    }
}

// Move to the next question
function handleNextQuestion() {
    // Deselect the current selected option
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }

    indexNumber++;
    questionNumber++;

    // Check if there are more questions
    if (indexNumber < questions.length) {
        displayQuestion(indexNumber);
    } else {
        alert(`Quiz over! Your score: ${playerScore}/${questions.length}`);
    }
}

// Initialize first question
displayQuestion(indexNumber);

// Attach the click event listener to the submit button to check the answer
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkAnswer);
