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
    {
        question: "Quelle équipe a remporté le dernier Championnat du Monde de Hockey ?",
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
        optionC: "42 kilomètres",
        optionD: "64 kilomètres",
        correctOption: "optionC",
    },
    {
        question: "Dans quel pays est né le boxeur Muhammad Ali ?",
        optionA: "États-Unis",
        optionB: "Royaume-Uni",
        optionC: "Canada",
        optionD: "Jamaïque",
        correctOption: "optionA",
    },
    {
        question: "Quel athlète a remporté le plus grand nombre de médailles d'or aux Jeux Olympiques ?",
        optionA: "Michael Phelps",
        optionB: "Usain Bolt",
        optionC: "Maria Sharapova",
        optionD: "Yusuf Bolt",
        correctOption: "optionA",
    },
    {
        question: "Quel ballon est utilisé dans le basket-ball ?",
        optionA: "Football",
        optionB: "Volleyball",
        optionC: "Handball",
        optionD: "Basketball",
        correctOption: "optionD",
    },
    {
        question: "En quelle année la Fédération Internationale de Football (FIFA) a-t-elle été fondée ?",
        optionA: "1904",
        optionB: "1923",
        optionC: "1948",
        optionD: "1960",
        correctOption: "optionA",
    },
    {
        question: "Quel pays a remporté le plus de médailles d'or aux Jeux olympiques d'été ?",
        optionA: "États-Unis",
        optionB: "URSS",
        optionC: "Chine",
        optionD: "Royaume-Uni",
        correctOption: "optionA",
    },
    {
        question: "Quel est le nombre maximum de joueurs sur le terrain en même temps dans une équipe de football ?",
        optionA: "9",
        optionB: "10",
        optionC: "11",
        optionD: "12",
        correctOption: "optionC",
    },
    {
        question: "Dans quel sport gagne-t-on la Coupe Stanley ?",
        optionA: "Baseball",
        optionB: "Football américain",
        optionC: "Hockey",
        optionD: "Basketball",
        correctOption: "optionC",
    },
    // More questions can follow...
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
            alert("Non, ce n'est pas la bonne réponse.");
        }

        // Move to next question immediately after feedback
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
        alert(`Quiz terminé! Votre score: ${playerScore}/${questions.length}`);
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
