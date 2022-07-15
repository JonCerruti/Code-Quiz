var quizQestions = document.getElementById('quiz');
var start = document.getElementById('start-btn');
var infoBox = document.getElementById('info-title');
var timer = document.getElementById('timer');
var counter = document.getElementById('counter');
var timeGuage = document.getElementById('timeGuage');
var choices = document.getElementById('choices');
var A = document.getElementById('A');
var B  = document.getElementById('B');
var C = document.getElementById('C');
var D  = document.getElementById('D');
var feedBack = document.getElementById('feedback');
var question = document.getElementById('quiz');

start.addEventListener('click',renderQuestions );

function countdown(minus) {
    var time = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
    if (time >0){
      timer.textContent = time
      if (minus != -1){
      time -- 
      }else{
      time -= 10;
      }
    }else{
      timer.textContent = ""
      clearInterval(timeInterval);
      displayMessage()
    }
    }, 1000);
}


function renderQuestions(){
  countdown();
    question.style.display = "block"
    infoBox.style.display = "none"
    // var currentQuestion = questions[currentQuestionIndex];
  
}
