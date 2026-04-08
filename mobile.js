const puzzle = document.getElementById("puzzle");
const size = 3; // 3x3
const pieceSize = 100;
let pieces = [];
let zCompteur = 0
const snapX = 100//33.33
const snapY = snapX

const mot = "Bon anniversaire"
let lettreAaffich = ["B", "o", "n", "a", "i", "v", "e", "r", "s"]
let lettreDejAffich = [" "]

images = ["url('lucienathan.jpg')", "url('lucienathan2.jpg')", "url('lucieCGenial2.jpg')", "url('lucieCGenial.jpg')", "url('logo.jpg')", "url('luciepdp.jpg')"]
let numTour = 0

document.getElementById("testGrille").onclick = testGrille;

//on créé les pièces
function createPieces(nomImg) {
    const tab = [...puzzle.getElementsByClassName("piece")]
    for (a of tab) {
        console.log("entreeBouclSupp", { a })
        puzzle.removeChild(a)
    }
    let i = 0
    numTour += 1
    for (let y = 0; y < size; y++) { //ligne
        for (let x = 0; x < size; x++) { //colonne
            console.log(i)
            const piece = document.createElement("div");
            piece.classList.add("piece");

            piece.setAttribute("data-index", i)
            i += 1
            // mettre bon endroit de l'image
            piece.style.backgroundImage = (nomImg)
            piece.style.backgroundPosition = `-${x * pieceSize}px -${y * pieceSize}px`;

            //forme pièce ==> à voir si on modifie plus tard
            //piece.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

            // Position mélangée
            piece.style.left = `${Math.random() * 200 + 300}px`;
            piece.style.top = `${Math.random() * 200}px`;
            console.log('piece', { piece })
            console.log('puzzle', { puzzle })
            document.getElementById("puzzle").onpointerdown = function (e) {
                console.log('ooo')
            }

            piece.onpointerdown = function (e) {
                let pieceT = true
                piece.style.zIndex = ++zCompteur
                piece.style.border = "3px solid green"
                console.log("vert")
                const x = e.clientX
                const y = e.clientY
                //let shiftX = x + 80 - piece.getBoundingClientRect().left;
                //let shiftY = y + 100 - piece.getBoundingClientRect().top;
                console.log("piece", { x, y })

                puzzle.onpointerdown = function (e) {
                    console.log("test", { pieceT })
                    if (pieceT != true) {
                        let x = e.clientX
                        let y = e.clientY
                        //let shiftX = x + 80 - piece.getBoundingClientRect().left;
                        //let shiftY = y + 100 - piece.getBoundingClientRect().top;

                        //console.log("puzzle1", { x, y, snapX, snapY })
                        x = Math.round((x) / snapX) * snapX
                        y = Math.round((y) / snapY) * snapY
                        //console.log("puzzle2", { x, y })
                        piece.style.left = x - 100 + "px";
                        piece.style.top = y - 100 + "px";
                        piece.style.border = "1px solid white"
                        console.log("blanc")
                    }
                    pieceT = false
                }
            };

            piece.ondragstart = () => false;

            puzzle.appendChild(piece);
            pieces.push(piece);

        }
    }
}
createPieces(images[0])

function testPiece(piece) {
    const i = +piece.getAttribute("data-index");
    const x = Math.round((piece.style.left).substring(0, (piece.style.left).length - 3) / 100);
    const y = Math.round((piece.style.top).substring(0, (piece.style.top).length - 3) / 100)
    const casE = x + 3 * y
    let bCase = 0
    if (casE == i) {
        bCase = 1
    }
    console.log('test', { i, x, y, casE, bCase })
    return bCase

}


function testGrille() {
    const result = true; //pieces.every(function (p) { return testPiece(p); })
    console.log('test', { result })
    if (result == true) {
        alert("Vous avez réussi le puzzle !! Vous avez gagné une lettre du mot secret et une image pour votre collection !!");

        lettreDejAffich += lettreAaffich[numTour - 1];
        let motAffich = "";
        for (let j = 0; j < mot.length; j++) {
            if (lettreDejAffich.indexOf(mot[j]) != -1) {
                motAffich += mot[j];
            }
            else {
                motAffich += '_'
            }
        }
        document.getElementById("motSecret").innerHTML = motAffich;

        const photo = document.createElement("div");
        photo.classList.add("photo");
        photo.style.backgroundImage = (images[numTour - 1])
        document.getElementById("photos").appendChild(photo);

        document.getElementById("puzzle").style.backgroundImage = images[numTour];
        createPieces(images[numTour]);

        photo.onpointerdown = function (e) {
            console.log(photo.style.backgroundImage)

            photo.style.border = "3px double"
            //photo.style.width = '200px'
            //photo.style.height = '200px'

            const ph = document.createElement("div");
            ph.classList.add("ph");
            ph.style.width = '300px'
            ph.style.height = '300px'
            //ph.style.backgroundColor = "grey"
            ph.style.backgroundImage = photo.style.backgroundImage
            document.getElementById("afficheIm").style.zIndex = 5683
            document.getElementById("afficheIm").appendChild(ph);

            console.log("afficher", { ph })

            let photoT = true

            document.onpointerdown = function (e) {
                console.log('ge', { photoT })
                if (photoT != true) {
                    //console.log('entree boucle')
                    document.getElementById("afficheIm").style.zIndex = -1
                    document.getElementById("afficheIm").removeChild(ph)
                    photo.style.border = "1px dotted"
                    photo.style.width = '100px'
                    photo.style.height = '100px'

                }
                photoT = false
            }
        }


    }
}


/*
function moveAt(pageX, pageY) {
    console.log("page", { pageX, pageY, shiftX })
    let x = pageX - shiftX
    let y = pageY - shiftY
    if (x < 300) {
        x = Math.round(x / snapX) * snapX
        y = Math.round(y / snapY) * snapY
    }
    piece.style.left = x + "px";
    piece.style.top = y + "px";
}

function onpointermove(e) {
    const { pageX, pageY } = e
    moveAt(pageX, pageY);
}
 
document.addEventListener("pointermove", onpointermove);

document.onpointerup = function () {
    document.removeEventListener("pointermove", onpointermove);
    document.onpointerup = null;
    testPiece(piece)
    piece.style.border = "1px solid white"
};
*/