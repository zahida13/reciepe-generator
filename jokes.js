const jokesContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((items) => (jokesContainer.textContent = `${items.joke}`));
  jokesContainer.classList.add("fade");
};

btn.addEventListener("click", getJoke);
