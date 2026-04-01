const puzzle = document.getElementById("puzzle");
const size = 3; // 3x3
const pieceSize = 100;
let pieces = [];
let zCompteur = 0
let i = 0
const snapX = 33.33
const snapY = snapX

document.getElementById("testGrille").onclick = testGrille;

//on créé les pièces
for (let y = 0; y < size; y++) { //ligne
    for (let x = 0; x < size; x++) { //colonne
        console.log(i)
        i += 1
        const piece = document.createElement("div");
        piece.classList.add("piece");

        piece.setAttribute("data-index", i)
        // mettre bon endroit de l'image
        piece.style.backgroundPosition = `-${x * pieceSize}px -${y * pieceSize}px`;

        //forme pièce ==> à voir si on modifie plus tard
        //piece.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

        // Position mélangée
        piece.style.left = `${Math.random() * 200 + 300}px`;
        piece.style.top = `${Math.random() * 200}px`;

        piece.onmousedown = function (e) {
            piece.style.zIndex = ++zCompteur
            let shiftX = e.clientX - piece.getBoundingClientRect().left;
            let shiftY = e.clientY + 120 - piece.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                let x = pageX - shiftX
                let y = pageY - shiftY
                if (x < 300) {
                    x = Math.round(x / snapX) * snapX
                    y = Math.round(y / snapY) * snapY
                }
                piece.style.left = x + "px";
                piece.style.top = y + "px";
            }

            function onMouseMove(e) {
                moveAt(e.pageX, e.pageY);
            }

            document.addEventListener("mousemove", onMouseMove);

            document.onmouseup = function () {
                document.removeEventListener("mousemove", onMouseMove);
                document.onmouseup = null;
                testPiece(piece)
            };
        };

        piece.ondragstart = () => false;

        puzzle.appendChild(piece);
        pieces.push(piece);

    }
}
function testPiece(piece) {
    const i = +piece.getAttribute("data-index");
    const x = Math.round((piece.style.left).substring(0, (piece.style.left).length - 3) / 100);
    const y = Math.round((piece.style.top).substring(0, (piece.style.top).length - 3) / 100)
    const casE = x + 3 * y + 1
    let bCase = 0
    if (casE == i) {
        bCase = 1
    }
    console.log('test', { i, x, y, casE, bCase })
    return bCase

}


function testGrille() {
    const result = pieces.every(function (p) { return testPiece(p); })
    console.log('test', { result })
    if (result == true) {
        alert("Vous avez réussi le puzzle")
    }
}