// Dark Mode button

const darkModeButton = document.querySelector('[data-js="dark-mode"]');

const darkBody = document.querySelector('[data-js="dark-body"]');
const darkContent = document.querySelector('[data-js="dark-content"]');

darkModeButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    darkBody.classList.add("dark-body");
    darkContent.classList.add("dark-content");
  } else {
    darkBody.classList.remove("dark-body");
    darkContent.classList.remove("dark-content");
  }
});
