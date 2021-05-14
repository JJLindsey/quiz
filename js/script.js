var timerEl = $('#countdown');
//var timerEl = document.getElementById('countdown');
var mainEl = $('#main');
//var mainEl = document.getElementById('main');
var startBtn = $('#start');
//var startBtn = document.getElementById('start');
//timerEl.text('text left:');
//timerEl.textContent = "time left:"
var quizContainerEl = $('.quiz-container');

//array for quiz questions
var questions = [
    {
    q: "What does JavaScript use to store data?", 
    a: ["Strings", "Variables", "Booleans", "Barrels"],
    correctAns: 1
},
{   q: "Functions take ___________________ to define or perform its task.", 
    a: ["parameters", "obstactles", "assets", "values"],
    correctAns: 0
},
    
{   q: "True or False in JavaScript is called _______________.",
    a: ["true", "condition", "not valid", "boolean"],
    correctAns: 3
},
    
{   q: "Items in an Array are stored in a numbered list called a(n) ______________.",
    a: ["string", "drawer", "index", "variable"],
    correctAns: 2
}];


var score = 0;


function displayQuestion(questionObject) {
    // create the question element
    var questionTextEl = $('<h3>')
    // var questionTextEl = document.createElement('h3')
    questionTextEl.text(questionObject.q);
    quizContainerEl.append(questionTextEl);

    // create the options elements
    var optionsCard = $('<div>')
    optionsCard.addClass('card');
    optionsCard.attr('style', 'width: 18rem;')

    var optionsUl = $("<ul>");
    optionsUl.addClass("list-group list-group-flush");

    var optionsLi = $('<li>');
    optionsLi.addClass('list-group-item');
    optionsLi.text(questionObject.a[0]);

    var optionsLi2 = $('<li>');
    optionsLi2.addClass('list-group-item');
    optionsLi2.text(questionObject.a[1]);

    var optionsLi3 = $('<li>');
    optionsLi3.addClass('list-group-item');
    optionsLi3.text(questionObject.a[2]);

    var optionsLi4 = $('<li>');
    optionsLi4.addClass('list-group-item');
    optionsLi4.text(questionObject.a[3]);
    
    optionsUl.append(optionsLi)
    optionsUl.append(optionsLi2)
    optionsUl.append(optionsLi3)
    optionsUl.append(optionsLi4)

    optionsCard.append(optionsUl);

    quizContainerEl.append(optionsCard)
}

displayQuestion(questions[0])

    
    //<h3 id="question-text">Sample question</h3>
// <div class="card" style="width: 18rem;">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">Cras justo odio</li>
//       <li class="list-group-item">Dapibus ac facilisis in</li>
//       <li class="list-group-item">Vestibulum at eros</li>
//       <li class="list-group-item">Vestibulum at eros</li>
//     </ul>
//   </div>')


//loop through question array
for (var i = 0; i < questions.length; i++) {
    // Display current question to user as user to choose correct answer
    var answer = (questions[i].q);

}

// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
    if(timeLeft >= 1) {

        //timerEl.textContent = timeLeft + ' seconds remaining';
        timerEl.text(timeLeft + ' seconds remaining');
        timeLeft--;
    } else {
        timerEl.text('');
        //timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
   //every second run above code until timeLeft = 0
    }, 1000);
}

startBtn.on('click', countdown);
//startBtn.onclick = countdown;

