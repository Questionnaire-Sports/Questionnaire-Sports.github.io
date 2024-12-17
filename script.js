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
                optionB: "21 kilomtres",
                optionC: "42,195 kilometres",
                optionD: "100 kilometres",
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
        {
                question: "Which athlete won the largest number of gold medals at the Olympic Games?",
                optionA: "Michael Phelps",
                optionB: "Usain Bolt",
                optionC: "Maria Sharapova",
                optionD: "Yusuf Bolt",
                correctOption: "optionA",
        },
        {
                question: "What ball is used in basketball?",
                optionA: "Football",
                optionB: "Volleyball",
                optionC: "Handball",
                optionD: "Basketball",
                correctOption: "optionD",
        },
        {
                question: "In what year was the International Football Federation (FIFA) founded?",
                optionA: "1904",
                optionB: "1923",
                optionC: "1948",
                optionD: "1960",
                correctOption: "optionA",
        },
        {
                question: "Quel pays a reporté le plus de médailles d'or aux Jeux olympiques d'été",
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
                optionB: "Football american",
                optionC: "Hockey",
                optionD: "Basketball",
                correctOption: "optionC",
        },
        {
                question: "Quel est le nombre maximum de joueurs sur le terrain en même temps dans une équipe de volley-ball ?",
                optionA: "4",
                optionB: "5",
                optionC: "6",
                optionD: "7",
                correctOption: "optionC",
        },
        {
                question: "Quel jeu est considéré comme le sport national du Japon ?",
                optionA: "Tennis",
                optionB: "Golf",
                optionC: "Baseball",
                optionD: "Sumo",
                correctOption: "optionD",
        },
        {
                question: "Lequel des sports suivants n'utilise pas de ballon ?",
                optionA: "Hockey",
                optionB: "Golf",
                optionC: "Tennis",
                optionD: "Polo",
                correctOption: "optionA",
        },
        {
                question: "Combien pèse un ballon de football NFL ?",
                optionA: "0,5 lbs",
                optionB: "1 lbs",
                optionC: "1,25 lbs",
                optionD: "1,5 lbs",
                correctOption: "optionB",
        },
        {
                question: "Dans quelle équipe Shaquille O'Neal a-t-il débuté sa carrière ?",
                optionA: "Orlando Magic",
                optionB: "Philadelphia Sixers",
                optionC: "Los Angeles Lakers",
                optionD: "Miami Heat",
                correctOption: "optionA",
        },
        {
                question: "Qui est le détenteur du record NBA du nombre de points marqués pour l'ensemble de sa carrière ?",
                optionA: "LeBron James",
                optionB: "Micheal Jordan",
                optionC: "Karl Malone",
                optionD: "Kareem Abdul-Jabbar",
                correctOption: "optionA",
        },
        {
                question: "Dans quelle équipe joue Luka Doncic ?",
                optionA: "Los Angeles Lakers",
                optionB: "Golden State Warriors",
                optionC: "Dallas Mavericks",
                optionD: "Miami Heat",
                correctOption: "optionC",
        },
        {
                question: "Quelle équipe a remporté le plus grand nombre de champions NBA ?",
                optionA: "Los Angeles Lkaers",
                optionB: "Boston Celtics",
                optionC: "Chicago Bulls",
                optionD: "Miami Heat",
                correctOption: "optionB",
        },
        {
                question: "Quel joueur de football a été reconnu comme le meilleur joueur du monde selon la FIFA en 2020 ?",
                optionA: "Cristiano Ronaldos",
                optionB: "Kylian Mbappé",
                optionC: "Neymar",
                optionD: "Lionel Messi",
                correctOption: "optionD",
        },
        {
                question: "Quel âge avait Mike Tyson lorsqu'il est devenu le plus jeune homme à remporter un titre de boxe poids lourd ?",
                optionA: "16",
                optionB: "18",
                optionC: "20",
                optionD: "22",
                correctOption: "optionC",
        },
        {
                question: "Quel gardien de but détient le record du plus grand nombre de blanchissages en carrière dans la LNH ?",            
                optionA: "Patrick Roy",
                optionB: "Dominik Hasek",
                optionC: "Martin Brodeur",
                optionD: "Ed Belfour",
                correctOption: "optionC",
        },
        {
                question: "Quel est le terme désignant un exploit au hockey qui implique qu'un joueur enregistre un but, une passe décisive et un combat dans le même match ?",
                optionA: "Power Play Hat Trick",
                optionB: "Bob Probert Hat Trick",
                optionC: "Bobby Orr Hat Trick",
                optionD: "Gordie Howe Hat Trick",
                correctOption: "optionC",
        },
        {
                question: "Quel a été le temps record d'Usain Bolt au sprint de 100 mètres, qu'il a établi en 2009 ?",
                optionA: " 9.58 secondes",
                optionB: "9.65 secondes",
                optionC: "9.72 secondes",
                optionD: "9.81 secondes",
                correctOption: "optionA",
        },
        {
                question: "Au baseball, combien de prises un frappeur obtient-il avant d’être éliminé ?",
                optionA: "2",
                optionB: "3",
                optionC: "4",
                optionD: "5",
                correctOption: "optionB",
        },
        {
                question: "Au football, combien de points vaut un field goal ?",
                optionA: "2",
                optionB: "3",
                optionC: "4",
                optionD: "7",
                correctOption: "optionB",
        },
        {
                question: "Combien de trous jouez-vous en moyenne lors d’une partie de golf ?",
                optionA: "7",
                optionB: "9",
                optionC: "12",
                optionD: "18",
                correctOption: "optionD",
        },
        {
                question: "Combien de manches compte un match de baseball de la MLB ?",
                optionA: "3",
                optionB: "5",
                optionC: "7",
                optionD: "9",
                correctOption: "optionD",
        },
        {
                question: "Combien de basketteurs par équipe peuvent être sur le terrain en même temps en NBA ?",
                optionA: "5",
                optionB: "6",
                optionC: "7",
                optionD: "8",
                correctOption: "optionA",
        },
        {
                question: "Quel est le record du plus grand nombre de cartons rouges donnés au cours d'un seul match de football ?",
                optionA: "15",
                optionB: "17",
                optionC: "29 ",
                optionD: "36",
                correctOption: "optionD",
        },

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
                handleNextQuestion();
        } else {
            const correctLabel = document.getElementById(currentQuestion.correctOption + "-label");
            if (correctLabel) {
                alert("Non! La bonne réponse est: " + correctLabel.innerText);
            } else {
                alert("Non! Ceci n'est pas la bonne réponse.");
            }
        }
    }
}
// Move to the next question
function handleNextQuestion() {
    indexNumber++;
    questionNumber++;
    // Check if there are more questions
    if (indexNumber < questions.length) {
        displayQuestion(indexNumber);
        // Clear the selected option
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            selectedOption.checked = false;
        }
    } else {
        alert(`Quiz over! Your score: ${playerScore}/${questions.length}`);
    }
}
// Initialize first question
displayQuestion(indexNumber);

// Attach the click event listeners to the answer options
const optionLabels = document.querySelectorAll('.option');
optionLabels.forEach(label => {
  label.addEventListener('click', checkAnswer);
});
