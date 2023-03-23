const triangle = document.querySelector(".triangle");
const square = document.querySelector(".square");
const circle = document.querySelector(".circle");
const button = document.querySelector(".button");

function hidden(element) {
  element.addEventListener("click", () => {
    element.classList.add("hidden");
  });
}

function visibility(element) {
  element.classList.remove("hidden");
}

hidden(triangle);
hidden(square);
hidden(circle);

button.addEventListener("click", () => {
  visibility(triangle);
  visibility(square);
  visibility(circle);
});