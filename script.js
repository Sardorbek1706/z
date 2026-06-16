const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// change the position of no button on hover and touch
function moveNoButton() {
  const containerRect = questionContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  
  let newX = Math.random() * (containerRect.width - btnRect.width);
  let newY = Math.random() * (containerRect.height - btnRect.height);
  
  // Constrain to container
  newX = Math.max(0, Math.min(newX, containerRect.width - 100));
  newY = Math.max(0, Math.min(newY, containerRect.height - 50));
  
  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});