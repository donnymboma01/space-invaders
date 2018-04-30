let tableaux = [];
var tirer ;
let tab = [];
//Création et afffichage du vaisseau sur le champ de batille.
var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
afficherLeVaisseaux.initHtml();
console.log(afficherLeVaisseaux);

tirer = new Tir(40,200);
tirer.move();



//var soucoupe = new Soucoupe(900,200); soucoupe à une position fixe bien determinée.
//var x = Math.floor((Math.random()*(970)+1));
var y = Math.floor((Math.random()*370)+1);
var soucoupe = new Soucoupe(950,y);



soucoupe.initHtml();
soucoupe.move();



//la fonction permet de deplacer le vaisseau sur le champ de bataille.

function affKeyCode(event) {
    var key = event.keyCode;
    if (key==38){
        afficherLeVaisseaux.move(-20);
        console.log("le vaisseau va vers le haut");
    }
    if(key==40){
        afficherLeVaisseaux.move(+20);
        console.log("le vaisseau va vers le bas");
    }
    // quand on appui sur la touche 'espace' du clavier on ouvre le feu.
    if (key==32){
        afficherLeVaisseaux.fire();
        console.log("Feu!")
    }

}
//manipule la fonction game qui reprend presque toutes les méthodes du jeu.
var intervalle = setInterval(game,100);

function game() {


}
