window.addEventListener("load", function () {
  var glide = new Glide(".glide", {
    type: "slider",
    startAt: 0,
    perView: 1,
    focusAt: "center",
    rewind: false,
  });

  glide.on("run", function () {
    const index = glide.index;
    if (index == 0) {
      document.getElementById("prev-btn").style.display = "none";
      document.getElementById("next-btn").style.display = "flex";
    } else if (index == 1) {
      document.getElementById("prev-btn").style.display = "flex";
      document.getElementById("next-btn").style.display = "none";
    }
  });

  glide.mount();
  glide.update();
});
// Game Selection Script
function showPreview() {
  document.getElementById("game-preview").classList.add("active");
  document.getElementById("overlay").style.display = "block";
}

function confirmExit() {
  document.getElementById("game-exit").classList.add("active");
  document.getElementById("overlay").style.display = "block";
}

function hidePreview() {
  document.getElementById("game-preview").classList.remove("active");
  document.getElementById("overlay").style.display = "none";
}

function menustartGame(gameId) {
  hidePreview();
  document.getElementById(gameId).classList.add("active");
  // You might want to initialize or reset the game here
  if (gameId === "game1") {
    game1Logic();
  } else if (gameId === "game2") {
    game2Logic();
  }
}

function exitGame() {
  document.querySelectorAll(".mini-game-container").forEach((container) => {
    document.getElementById("game-exit").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
    container.classList.remove("active");
  });
}

function noExitGame() {
  document.getElementById("game-exit").classList.remove("active");
  document.getElementById("overlay").style.display = "none";
}

function game1Logic() {
  // Game 1 code here
  const iframe = document.querySelector("#game1 iframe");
  iframe.src = "jigsaw.html"; // Reload the iframe
  console.log("Game 1 started in full screen");
}

function game2Logic() {
  // Game 2 code here
  const iframe = document.querySelector("#game2 iframe");
  iframe.src = "flip.html"; // Reload the iframe
  console.log("Game 2 started in full screen");
}
