let cards = document.querySelectorAll(".item");
let matchedPairs = 0;
let flippedCards = [];
let isChecking = false;
let meow = document.querySelector("#meow");

meow.addEventListener("click", () => {
  let mySound = new Audio("sounds/meow.mp3");
  mySound.play();
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (isChecking || flippedCards.includes(card)) return;

    revealCard(card);
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      isChecking = true;
      let [first, second] = flippedCards;
      let firstCat = first.getAttribute("data-cat");
      let secondCat = second.getAttribute("data-cat");

      if (firstCat === secondCat) {
        matchedPairs++;
        document.querySelector("#score").innerText = matchedPairs;
        document.querySelector("h1").innerText = "Wow! That is correct!";
        flippedCards = [];
        isChecking = false;

        if (matchedPairs === 8) {
          document.querySelector("h1").innerText = "Congratulations! You Win!";
        }
      } else {
        document.querySelector("h1").innerText = "Try Again";
        setTimeout(() => {
          hideCard(first);
          hideCard(second);
          flippedCards = [];
          isChecking = false;
        }, 1000);
      }
    }
  });
});

function revealCard(card) {
  let img = card.querySelector("img");
  img.src = card.getAttribute("data-cat");
  img.classList.add("revealed");
}

function hideCard(card) {
  let img = card.querySelector("img");
  img.src = "assets/paws.png";
  img.classList.remove("revealed");
}
