var quizForm = document.querySelector(".quiz-container");
var btnQuiz = document.querySelector("#btn-submit");
var outputQuiz = document.querySelector("#output-quiz");

const correctAnswers = ["90°", "right angled", "hypotenuse", "isosceles"];

btnQuiz.addEventListener("click", calculateScore);

function calculateScore() {
  var score = 0,
    index = 0;
  const data = new FormData(quizForm);
  for (let value of data.values()) {
    console.log(value);
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index += 1;
  }
  outputQuiz.innerText = "Your score is " + score;
}
