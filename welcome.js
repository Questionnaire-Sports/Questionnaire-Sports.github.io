
// Wait for the DOM to load before attaching event listeners
window.addEventListener('DOMContentLoaded', (event) => {
    // Get the start button
    const startButton = document.getElementById("start-quiz-btn");

    // Add event listener to the start button
    startButton.addEventListener("click", function() {
        // Hide the welcome screen
        document.getElementById("welcome-screen").style.display = "none";
        
        // Show the quiz container
        document.getElementById("quiz-container").style.display = "block";
        
        // You can call the startQuiz function here if necessary
        // startQuiz();  // If you want to immediately load the quiz
    });
});
