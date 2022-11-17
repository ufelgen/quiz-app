// bookmarks toggle tagged
const bookmark1 = document.querySelector('[data-js="bookmark-1"]');
const bookmark2 = document.querySelector('[data-js="bookmark-2"]');
const bookmark3 = document.querySelector('[data-js="bookmark-3"]');

bookmark1.addEventListener("click", () => {
  bookmark1.classList.toggle("tagged");
});

bookmark2.addEventListener("click", () => {
  bookmark2.classList.toggle("tagged");
});

bookmark3.addEventListener("click", () => {
  bookmark3.classList.toggle("tagged");
});

// answer button
const answerButton1 = document.querySelector('[data-js="quiz-card__button-1"]');
const answer1 = document.querySelector('[data-js="quiz-card__answer-1"]');

answerButton1.addEventListener("click", () => {
  answer1.classList.toggle("hidden");
  if (answer1.classList.contains("hidden")) {
    answerButton1.textContent = "hide answer";
  } else {
    answerButton1.textContent = "show answer";
  }
});

const answerButton2 = document.querySelector('[data-js="quiz-card__button-2"]');
const answer2 = document.querySelector('[data-js="quiz-card__answer-2"]');

answerButton2.addEventListener("click", () => {
  answer2.classList.toggle("hidden");
  if (answer2.classList.contains("hidden")) {
    answerButton2.textContent = "hide answer";
  } else {
    answerButton2.textContent = "show answer";
  }
});

const answerButton3 = document.querySelector('[data-js="quiz-card__button-3"]');
const answer3 = document.querySelector('[data-js="quiz-card__answer-3"]');

answerButton3.addEventListener("click", () => {
  answer3.classList.toggle("hidden");
  if (answer3.classList.contains("hidden")) {
    answerButton3.textContent = "hide answer";
  } else {
    answerButton3.textContent = "show answer";
  }
});
