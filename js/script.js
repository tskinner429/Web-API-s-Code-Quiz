var questionEl = document.getElementById("question-section");
var timeEl = document.getElementById("time")
var fighterIndex = 0;
var timer;
var secondsLeft = 90;
var fighters = [
    {
        name: "Mario",
        ageOptions: [42, 25, 38, 14],
        actualTier: 42,
    },
    {
        name: "Marth",
        ageOptions: [19, 33, 45, 90],
        actualAge: 33,
    },
    {
        name: "Pikachu",
        ageOptions: [15, 27, 30, 19],
        actualAge: 27,
    },
    {
        name: "Link",
        ageOptions: [17, 5, 37, 24],
        actualAge: 37,
    },
    {
        name: "Fox",
        ageOptions: [30, 25, 2, 19],
        actualAge: 30,
    },
    {
        name: "DK",
        ageOptions: [100, 38, 40, 42],
        actualAge: 40,
    },
    {
        name: "Pichu",
        ageOptions: [24, 36, 19, 25],
        actualAge: 24,
    },
    {
        name: "Sonic",
        ageOptions: [7, 15, 24, 32],
        actualAge: 32,
    }
]


function showCurrentFighter() {
    //target current fighter from fighter array
    var currentFighter = fighters[fighterIndex];

    var figherHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">What tier is ${currentFighter.name}?</h5>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[0]})">
        ${currentFighter.ageOptions[0]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[1]})">
        ${currentFighter.ageOptions[1]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[2]})">
        ${currentFighter.ageOptions[2]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[3]})">
        ${currentFighter.ageOptions[3]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[4]})">
        ${currentFighter.ageOptions[4]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[5]})">
        ${currentFighter.ageOptions[5]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[6]})">
        ${currentFighter.ageOptions[6]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFighter.ageOptions[7]})">
        ${currentFighter.ageOptions[7]}
        </a>
    </div>
    </div>
    `

    questionEl.innerHTML = friendHTML
}


function checkAnswer(selectedTier) {
    var currentFighter = fighters[fighterIndex];

    if (currentFighter.actualAge === selectedAge) {
        console.log("Correct")
    } else {
        console.log("Incorrect")
    }

    showNextFighter();
}

function showNextFighter() {
    fighterIndex++;

    if (fighterIndex < fighter.length) {
        showCurrentFighter()
    } else {
        endQuiz();
    }
}


function starTimer() {
    timer = setInterval(function () {
        secondsLeft--
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    questionEl.innerHTML = `<h2>Quiz Over!</h2>`
}

function startQuiz() {
    starTimer();
    showCurrentFriend();
}