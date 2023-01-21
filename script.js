const quizData = [
  {
    question: "How many wonders of the world are there?",
    a: "5",
    b: "12",
    c: "7",
    d: "8",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2023?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Bruce Banner",
    b: "Recep Tayyip Erdoğan",
    c: "Donald Trump",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopteres Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript lanched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

currentQuiz = 0;
score = 0;

const loadQuiz = function () {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
};

loadQuiz();

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      console.log(score);
    }
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
    <button onclick="location.reload()">Reload</button>`;
  }
});

const getSelected = function () {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
  console.log(answer);
};
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
