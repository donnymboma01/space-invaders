//tableau pour les tirs.
let tableaux = [];
//tableau pour les soucoupes afin qu'elles avancent.
let tab = [];
//tableau pour les soucoupes.


//Création et afffichage du vaisseau sur le champ de batille.
var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
afficherLeVaisseaux.initHtml();
console.log(afficherLeVaisseaux);

//var soucoupe = new Soucoupe(900,200); soucoupe à une position fixe bien determinée.
//var x = Math.floor((Math.random()*(970)+1));
var y = Math.floor((Math.random() * 370) + 1);
var soucoupe = new Soucoupe(950, y);


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
        let tirer = afficherLeVaisseaux.fire();
        tableaux.push(tirer);
        tirer.initHtml();
    }

}
/*manipule la fonction game qui reprend prèsque toutes les méthodes du jeu.
chaque une seconde une nouvelle soucoupe apparait.*/
function main() {
     setInterval(game, 1000);
}
main();
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
//permet de faire avancer les tirs vers les soucoupes ennemis afin de les detruire mais ne fait encore rien au moment de la collision entre soucoupe et tir.

function avancementTir() {
    for (let i = 0; i < tableaux.length; i++) {
        tableaux[i].move();
    }

}
//la fonction permet l'avancement des soucoupes ennemis de droite à gauche.
function avancementSoucoupes() {
    for (let j = 0; j < tab.length; j++) {
        tab[j].move();

    }

}

//fait avancer les tirs avec une intervalle de temps de 100 millisecondes(plus vite) différent de celui définit pour la fonction game car mieux .
setInterval(avancementTir,100);


//la fonction reprend prèsque les autres fonctions importantes du jeu et permet la dynamique du jeu.
function game() {
    creationDesSoucoupes();
    avancementSoucoupes();
   // avancementTir();



}
