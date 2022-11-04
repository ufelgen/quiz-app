const form = document.querySelector('[data-js="new-quiz-card-form"]');
const createButton = document.querySelector('[data-js="create-button"]');
const questionInput = document.querySelector('[data-js="your-question"]');
const answerInput = document.querySelector('[data-js="your-answer"]');
const tagInput = document.querySelector('[data-js="your-tag"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fields = event.target.elements;
  const question = fields.question.value;
  const answer = fields.answer.value;
  const tag = fields.tag.value;

  event.target.reset();
  event.target.elements.question.focus();

  const newCard = document.createElement("section");
  newCard.classList.add("quiz-card");
  main.append(newCard);

  const newBookmark = document.createElement("button");
  newBookmark.classList.add("bookmark");
  newBookmark.setAttribute("type", "button");
  newBookmark.setAttribute("data-js", "bookmark-new");
  newCard.append(newBookmark);
  newBookmark.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;

  const newQuestion = document.createElement("p");
  newQuestion.classList.add("quiz-card__question");
  newQuestion.textContent = `${question}`;
  newCard.append(newQuestion);

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("quiz-card__button");
  newAnswerButton.setAttribute("data-js", "quiz-card__button-new");
  newAnswerButton.textContent = "show answer";
  newCard.append(newAnswerButton);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("quiz-card__answer");
  newAnswer.setAttribute("data-js", "quiz-card__answer-new");
  newAnswer.textContent = `${answer}`;
  newCard.append(newAnswer);

  const newDiv = document.createElement("div");
  newDiv.classList.add("quiz-card__tags");
  newCard.append(newDiv);

  const newTag = document.createElement("p");
  newTag.classList.add("quiz-card__tag");
  newTag.textContent = `#${tag}`;
  newDiv.append(newTag);

  const answerButtonNew = document.querySelector(
    '[data-js="quiz-card__button-new"]'
  );
  const answerNew = document.querySelector('[data-js="quiz-card__answer-new"]');

  answerButtonNew.addEventListener("click", () => {
    answerNew.classList.toggle("hidden");
    if (answerNew.classList.contains("hidden")) {
      answerButtonNew.textContent = "hide answer";
    } else {
      answerButtonNew.textContent = "show answer";
    }
  });
  const bookmarkNew = document.querySelector('[data-js="bookmark-new"]');
  bookmarkNew.addEventListener("click", () => {
    bookmarkNew.classList.toggle("tagged");
  });
});
