// Dark Mode button

const darkModeButton = document.querySelector('[data-js="dark-mode"]');

const darkBody = document.querySelector('[data-js="dark-body"]');
const darkContent = document.querySelector('[data-js="dark-content"]');

darkModeButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    darkBody.classList.add("dark-body");
    darkContent.classList.add("dark-content");
    const hippo = document.querySelector('[data-js="profile-pic"]');
    hippo.innerHTML = `
  <i class="fa-solid fa-hippo"></i>
  <i class="fa-solid fa-hat-wizard fa-2xs hat"></i>
   `;
    const name = document.querySelector('[data-js="name"]');
    name.innerHTML = "Sleepy Hippo";
  } else {
    darkBody.classList.remove("dark-body");
    darkContent.classList.remove("dark-content");
    const hippo = document.querySelector('[data-js="profile-pic"]');
    hippo.innerHTML = `
  <i class="fa-solid fa-hippo"></i>
   `;
    const name = document.querySelector('[data-js="name"]');
    name.innerHTML = "Happy Hippo";
  }
});
