
let tableaux = [];
//on afffiche le vaisseau su le champ de bataille,pour mon cas ca sera un petit vaisseau.

var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
afficherLeVaisseaux.initHtml();

//on crée un objet tir et on affiche le tir sur le champ de bataille.

var tirer = new Tir(40,200);
//tirer.initHtml();

//la fonction permet de deplacer le vaisseau sur le champ de bataille.

function affKeyCode(event) {
    var key = event.keyCode;
    if (key==38){
        afficherLeVaisseaux.move(-20);
    }
    if(key==40){
        afficherLeVaisseaux.move(20);
    }
    if (key==32){
        afficherLeVaisseaux.fire();
    }
}
tirer.move();
