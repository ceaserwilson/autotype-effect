const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const dyTextEl = document.getElementById("dytext");
const dyForm = document.getElementById("dyform");
let text = "watch me come in with order...";
let index = 1;
let speed = 350 / speedEl.value;

dyForm.addEventListener("input", (e) => {
  if (e.key === 13) {
    e.preventDefault();
  }
  text = e.target.value;
});

typeText();

function typeText() {
  textEl.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(typeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
