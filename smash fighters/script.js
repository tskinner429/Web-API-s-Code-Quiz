var questionEl = document.getElementById("question-section");
var timeEl = document.getElementById("time")
var friendIndex = 0;
var timer;
var secondsLeft = 60;
var friends = [
    {
        name: "Mario",
        ageOptions: [42, 25, 38, 14],
        actualAge: 42,
    },
    {
        name: "Marth",
        ageOptions: [19, 45, 33, 55],
        actualAge: 33,
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
        name: "Pikachu",
        ageOptions: [15, 27, 30, 19],
        actualAge: 27,
    },

]


function showCurrentFriend() {
    //target current friend from friend array
    var currentFriend = friends[friendIndex];

    var friendHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">How old is ${currentFriend.name}?</h5>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFriend.ageOptions[0]})">
        ${currentFriend.ageOptions[0]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFriend.ageOptions[1]})">
        ${currentFriend.ageOptions[1]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFriend.ageOptions[2]})">
        ${currentFriend.ageOptions[2]}
        </a>
        <a href="#" class="btn btn-primary" onclick="checkAnswer(${currentFriend.ageOptions[3]})">
        ${currentFriend.ageOptions[3]}
        </a>
       
    </div>
    </div>
    `

    questionEl.innerHTML = friendHTML
}


function checkAnswer(selectedAge) {
    var currentFriend = friends[friendIndex];

    if (currentFriend.actualAge === selectedAge) {
        console.log("Correct")
    } else {
        console.log("Incorrect")
    }

    showNextFriend();
}

function showNextFriend() {
    friendIndex++;

    if (friendIndex < friends.length) {
        showCurrentFriend()
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