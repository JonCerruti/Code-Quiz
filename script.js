const quizQestions = document.getElementById('quiz');
const start = document.getElementById('start-btn');
const infoBox = document.getElementById('info-title');
const timer = document.getElementById('timer');
const counter = document.getElementById('counter');
const timeGuage = document.getElementById('timeGuage');
const choices = document.getElementById('choices');
const A = document.getElementById('A');
const B  = document.getElementById('B');
const C = document.getElementById('C');
const D  = document.getElementById('D');
const feedBack = document.getElementById('feedback');
const question = document.getElementById('question');

start.addEventListener('click',renderQuestions );

function countdown(minus) {
    var time = 75;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
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
    question.textContent = 'What is your name?'
}
