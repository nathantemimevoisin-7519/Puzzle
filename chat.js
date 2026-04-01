const puzzle = document.getElementById("puzzle");
const size = 3; // 3x3
const pieceSize = 100;

let pieces = [];

// Créer les pièces
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const piece = document.createElement("div");
    piece.classList.add("piece");

    // Position correcte (image)
    piece.style.backgroundPosition = `-${x * pieceSize}px -${y * pieceSize}px`;

    // Clip-path (carré ici, mais tu peux complexifier)
    piece.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

    // Position mélangée
    piece.style.left = `${Math.random() * 200}px`;
    piece.style.top = `${Math.random() * 200}px`;

    // Drag simple
    piece.onmousedown = function(e) {
      let shiftX = e.clientX - piece.getBoundingClientRect().left;
      let shiftY = e.clientY - piece.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        piece.style.left = pageX - shiftX + "px";
        piece.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      document.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        document.onmouseup = null;
      };
    };

    piece.ondragstart = () => false;

    puzzle.appendChild(piece);
    pieces.push(piece);
  }
}