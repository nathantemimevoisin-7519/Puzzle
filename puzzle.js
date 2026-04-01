
function decoupe(){
    const myImage = new Image(100, 200);
    myImage.src = "montagne.jpg";
    document.body.appendChild(myImage);
};

window.addEventListener("load",decoupe);


/* 
window.onload = function ( ) {
    // chemin de l'image
    var img_path = 'montagne.jpg'; //'
    var img = new Image();
     
    // lorsque l'image est chargée
    img.onload = function ( )
    {
        // on prend le minimum largeur / hauteur au cas
        // où l'image ne serait pas carrée
        var min  = Math.min( img.width, img.height );
         
        // on divise cette taille par 3 (le nombre de
        // pièces sur 1 côté et on le prend l'entier
        // inférieur le plus proche car c'est un nombre
        // de pixel et qu'il ne faut pas déborder
        //
        // size = (le nombre de pixel d'un côté d'une pièce)
        var size = Math.floor( min / 3 );
         
        var i;
        var div;
        var row;
        var col;
         
        // le container est une div qui contiendra le puzzle
        var container = document.createElement('div');
         
        // 'on affiche les pièces une à une
        for ( i = 0; i < 9; i += 1 )
        {
            // Ici on va dire qu'une pièce de
            // puzzle c'est une <div>
            div = document.createElement('div');
             
            div.style.width  = size + 'px';
            div.style.height = size + 'px';
             
            div.style.backgroundImage = 'url(' + img_path + ')';
             
            // L'astuce est ici
            // l'index de la pièce en x est : ( i % 3 )
            // l'index de la pièce en y est : Math.floor( i / 3 )
            // on les multiplis par size pour obtenir la position
            // du fond
            row = ( i % 3 );
            col = Math.floor( i / 3 );
             
            // A noter qu'il faut les opposer ( * -1 )pour obtenir
            // une translation correcte
            div.style.backgroundPosition =   - row * size + 'px ' + - col * size + 'px';
             
            // j'utilise les flotants pour positionner mon image
            div.style.float = 'left';
             
            // 'du coup si la ligne vaut 0, on revient à la ligne
            if ( !row )
            {
                div.style.clear = 'left';
            }
             
            // on ajoute la pièce au puzzle
            container.appendChild( div );
        }
         
        // on ajoute le puzzle au document
        document.body.appendChild( container );
    };
     
    // chemin de l'image -> lance le téléchargement
    img.src = img_path;
};

*/
