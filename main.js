let tableaux = [];
var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
var tirer = new Tir(40,200);
var soucoupe = new Soucoupe(900,200);
soucoupe.initHtml();
afficherLeVaisseaux.initHtml();
tirer.move();
soucoupe.move();


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
setInterval(game,3000);

function game() {

}
