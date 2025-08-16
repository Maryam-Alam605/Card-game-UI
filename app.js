let cards = document.querySelectorAll(".item");
let matchedPairs = 0;
let flippedCards = [];
let meow = document.querySelector("#meow");

meow.addEventListener("click", () => {
  let mySound = new Audio("sounds/meow.mp3");
  mySound.play();
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let cardName = card.querySelector("img");
    let catImage = card.getAttribute("data-cat");
    cardName.src = catImage;
    cardName.classList.add("revealed");

    flippedCards.push(card);

    if (flippedCards.length === 2) {
      let firstCard = flippedCards[0];
      let secondCard = flippedCards[1];

      let firstCat = firstCard.getAttribute("data-cat");
      let secondCat = secondCard.getAttribute("data-cat");

      if (firstCat === secondCat) {
        document.querySelector("h1").innerText = "Wow! that is correct!";
        matchedPairs++;
        document.querySelector("#score").innerText = matchedPairs;
        if (matchedPairs === 8) {
          document.querySelector("h1").innerText = "Congratulations! You Win!";
        }
        flippedCards = [];
      } else {
        document.querySelector("h1").innerText = "Try Again";

        setTimeout(() => {
          firstCard.querySelector("img").src = "assets/paws.png";
          secondCard.querySelector("img").src = "assets/paws.png";

          firstCard.querySelector("img").classList.remove("revealed");
          secondCard.querySelector("img").classList.remove("revealed");

          flippedCards = [];
        }, 1000);
      }
    }
  });
});
