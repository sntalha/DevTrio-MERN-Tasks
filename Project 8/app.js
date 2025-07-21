const username = document.getElementById('username');

let questions = [
    {
        question: "What does HTML stand for?",
        option: [
            "Hypertext Markup Language",
            "Hypertext Makeup Language",
            "Highlevel Markup Language",
            "Hyperlink Markup Language"
        ],
        answer: "Hypertext Markup Language"
    },
    {
        question: "How many types of CSS are there?",
        option: ["3", "2", "1", "4"],
        answer: "3"
    },
    {
        question: "What is JavaScript primarily used for?",
        option: [
            "Styling web pages",
            "Creating dynamic content on web pages",
            "Structuring web content",
            "Nothing"
        ],
        answer: "Creating dynamic content on web pages"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        option: ["text-color", "color", "font-color", "background-color"],
        answer: "color"
    },
    {
        question: "Which HTML element is used to define a header for a document or section?",
        option: ["<header>", "<head>", "<section>", "<footer>"],
        answer: "<header>"
    },
    {
        question: "Which JavaScript method is used to write content into an HTML document?",
        option: ["document.write()", "console.log()", "window.alert()", "innerHTML"],
        answer: "document.write()"
    },
    {
        question: "What is the correct way to include an external JavaScript file in an HTML document?",
        option: [
            "<script href='script.js'>",
            "<script name='script.js'>",
            "<script src='script.js'>",
            "<script file='script.js'>"
        ],
        answer: "<script src='script.js'>"
    },
    {
        question: "What is the default position value in CSS?",
        option: ["relative", "absolute", "static", "fixed"],
        answer: "static"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        option: ["<a>", "<link>", "<href>", "<hyperlink>"],
        answer: "<a>"
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        option: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    }
];

let questionCounter = 0;
let score = 0;

function startQuiz() {
    if (username.value === '') {
        alert('Please enter your name');
        return
    }
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    loadQuestion();
    document.getElementById('counter').innerText = `${questionCounter + 1} / ${questions.length}`;
}

function loadQuestion() {
    let quesTxt = document.getElementById('questionTxt')
    quesTxt.innerText = questions[questionCounter].question;
    let options = document.getElementById('options');
    // let optionBox = document.getElementById('option-container');
    options.innerHTML = '';
    for (var i=0; i<questions[questionCounter].option.length; i++) {
        let option = document.createElement('input');
        let optionTxt = document.createElement('label');
        let optionBox = document.createElement('div');
        optionBox.className = 'option-container';
        option.type = 'radio';
        option.name = 'option';
        option.id = `option${i}`;
        option.value = questions[questionCounter].option[i];
        optionTxt.htmlFor = `option${i}`;
        optionTxt.innerText = questions[questionCounter].option[i];
        optionBox.appendChild(option);
        optionBox.appendChild(optionTxt);
        options.appendChild(optionBox);
        console.log(option);
        console.log(optionTxt);
        console.log(optionBox);
        
    }
}

function nextQuestion() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }
    if (selectedOption.value === questions[questionCounter].answer) {
        score++;
    }
    questionCounter++;
    if (questionCounter < questions.length) {
        loadQuestion();
        document.getElementById('counter').innerText = `${questionCounter + 1} / ${questions.length}`;
    } else {
        console.log(score);
        showResult();
    }
}

function showResult() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('usernameResult').innerText = `Player: ${username.value}`;
    document.getElementById('score').innerText = `Your score is ${score} / ${questions.length}`;
}

function restartQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('welcome').style.display = 'block';
    questionCounter = 0;
    score = 0;
    username.value = '';
}