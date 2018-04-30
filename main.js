let tableaux = [];
var tirer;
let tab = [];
let drop = [];
//Création et afffichage du vaisseau sur le champ de batille.
var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
afficherLeVaisseaux.initHtml();
console.log(afficherLeVaisseaux);





//var soucoupe = new Soucoupe(900,200); soucoupe à une position fixe bien determinée.
//var x = Math.floor((Math.random()*(970)+1));
var y = Math.floor((Math.random() * 370) + 1);
var soucoupe = new Soucoupe(950, y);



soucoupe.initHtml();
soucoupe.move();



//la fonction permet de deplacer le vaisseau sur le champ de bataille grace aux touches du clavier.

function affKeyCode(event) {
    var key = event.keyCode;
    if (key == 38) {
        afficherLeVaisseaux.move(-20);
        console.log("le vaisseau va vers le haut");
    }
    if (key == 40) {
        afficherLeVaisseaux.move(+20);
        console.log("le vaisseau va vers le bas");
    }
    // quand on appui sur la touche 'espace' du clavier on ouvre le feu.
    if (key == 32) {
        afficherLeVaisseaux.fire();
        let drops = new Tir(afficherLeVaisseaux.posX,afficherLeVaisseaux.posY);
        drop.push(drops);
        console.log("Feu!")
    }

}
/*manipule la fonction game qui reprend presque toutes les méthodes du jeu.
chaque une seconde une nouvelle soucoupe apparait.*/

var intervalle = setInterval(game, 700);
//cette fonction crée des soucoupes et les affiche sur le champ de batail

function creationDesSoucoupes() {
    var posY = Math.floor((Math.random() * 370) + 1);
    if (tab.length < 10) {
        var soucoupe = new Soucoupe(950, posY);
        soucoupe.initHtml();
        tab.push(soucoupe);
        console.log("les ennemis debarquent !");
    }
}
//la fonction permet l'avancement des soucoupes ennemis de droite à gauche.
function avancementSoucoupes(){

}
//permet dee faire avancer les tirs vers les soucoupes ennemis afin de les detruire.
function avancementTir() {
    //drop = new Tir(40,200) ;
    for(let i=0;i<drop.length;i++){
        drop[i].initHtml();
        drop[i].move();

    }

}
//fait avancer les tirs avec une intervalle de temps de 100 millisecondes différent de celui définit pour la fonction game car mieux .
setInterval(avancementTir,100);


//la fonction reprend prèsque les autres fonctions importantes du jeu et permet la dynamique du jeu.
function game() {
    creationDesSoucoupes();
    avancementSoucoupes();



}

