document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('explore-btn').addEventListener('click', function() {
        var maxAttempts = 3;
        var userInput;
        var attempts = 0;

        while (attempts < maxAttempts) {
            userInput = prompt("Hello user! Welcome to our website. Please enter your name:");

            if (userInput === null) {
                alert("Operation cancelled. Please refresh the page if you wish to try again.");
                return;
            } else if (userInput) {
                alert("Hello " + userInput + ", welcome to the next page!");
                window.location.href = "ihaha.html";
                return;
            } else {
                attempts++;
                if (attempts < maxAttempts) {
                    alert("Please enter your name before we go to the next page.");
                }
            }
        }

        alert("Max attempts reached. Please refresh the page to try again.");
    });
});

