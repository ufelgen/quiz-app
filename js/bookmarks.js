// bookmarks toggle tagged
const bookmark2b = document.querySelector('[data-js="bookmark-2b"]');

bookmark2b.addEventListener("click", () => {
  bookmark2b.classList.toggle("tagged");
});

// answer button
const answerButton2b = document.querySelector(
  '[data-js="quiz-card__button-2b"]'
);
const answer2b = document.querySelector('[data-js="quiz-card__answer-2b"]');

answerButton2b.addEventListener("click", () => {
  answer2b.classList.toggle("hidden");
});
