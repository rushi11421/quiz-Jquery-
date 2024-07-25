$(document).ready(function() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: 2
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            question: "Which is a programming language?",
            options: ["HTML", "Python", "CSS", "Photoshop"],
            answer: 1
        },
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax", "Colorful Style Sheets"],
            answer: 0
        },
        {
            question: "What symbol is used for comments in JavaScript?",
            options: ["//", "<!-- -->", "/* */", "#"],
            answer: 0
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionData = questions[currentQuestion];
        $('#question').text(questionData.question);
        $('#options').empty();
        questionData.options.forEach((option, index) => {
            $('#options').append(`<li><label><input type="radio" name="option" value="${index}"> ${option}</label></li>`);
        });
    }

    $('#next').click(function() {
        const selectedOption = $('input[name="option"]:checked').val();
        if (selectedOption == questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            $('#quiz-app').html(`<h2>Your score is: ${score}/${questions.length}</h2>`);
        }
    });

    loadQuestion();
});
