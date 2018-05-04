//B112, MBOMA DONNY-49829

//tableau pour les tirs.
let tableaux = [];
//tableau pour les soucoupes afin qu'elles avancent.
let tab = [];
//tableau pour les soucoupes.
var soucoupe;



//Création et afffichage du vaisseau sur le champ de batille.
var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
afficherLeVaisseaux.initHtml();
console.log(afficherLeVaisseaux);

//la fonction permet de deplacer le vaisseau sur le champ de bataille grace aux touches du clavier.
/*function affKeyCode(event) {
    var key = event.keyCode;
    switch(key){
        case 38 : afficherLeVaisseaux.move(-20);
            break;
        case 40 : afficherLeVaisseaux.move(20);
            break;
    }
} */

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
        console.log("Feu !")
    }


}
/*manipule la fonction game qui reprend prèsque toutes les méthodes du jeu.
chaque une seconde une nouvelle soucoupe apparait.*/
function main() {
    setInterval(game, 100);
    console.log(tab);
    console.log(tableaux);
}
main();
//cette fonction crée des soucoupes et les affiche sur le champ de batail
function creationDesSoucoupes() {
    var posY = Math.floor((Math.random() * 370) + 1);
    soucoupe = new Soucoupe(950, posY);
    soucoupe.initHtml();
    tab.push(soucoupe);
    //console.log("les ennemis debarquent !");
    //    console.log(tab);

}
//permet de faire avancer les tirs vers les soucoupes ennemis afin de les detruire mais ne fait encore rien au moment de la collision entre soucoupe et tir.

function avancementTir() {
    for (let i = 0; i < tableaux.length; i++) {
        tableaux[i].move();
        limitTirs();
        //console.log(tableaux);
    }

}

//la fonction permet l'avancement des soucoupes ennemis vers le vaisseau de droite à gauche.
function avancementSoucoupes() {
    for (let j = 0; j < tab.length; j++) {
        tab[j].move();

    }

}




//Vérifie si une soucoupe a été touchée par un tir,si oui la soucoupe est supprimiée du champ de bataille.

function soucoupeDetruite() {
    for (var tir of tableaux) {
        for (let j = 0; j < tab.length; j++) {
            var x = Math.abs(tab[j].posX - tir.posX) + 3;
            var y = Math.abs((tab[j].posY + 15) - tir.posY);
            var dist = Math.sqrt(x * x + y * y);
            if (dist < 20) {
                let souco = document.getElementById("souc" + tab[j].id);
                souco.parentNode.removeChild(souco);
                tab.splice(j, 1);
                let t = document.getElementById("tirons" + tir.id);

                t.parentNode.removeChild(t);

                tableaux.splice(tableaux.indexOf(tir), 1);
            }
        }
    }
}


//la fonction reprend prèsque les autres fonctions importantes du jeu et permet la dynamique du jeu.
function game() {
    if (tab.length < 10) {
        creationDesSoucoupes();
    }
    avancementSoucoupes();
    avancementTir();
    soucoupeDetruite();
    limitSoucoupe();



}
//la fonction fait disparaitre les soucoupes une fois arrivées au bord du cadre.

function limitSoucoupe() {
    for (let j = 0; j < tab.length; j++) {
        if (tab[j].posX <= 20) {
            let souc = document.getElementById("souc" + tab[j].id);
            souc.parentNode.removeChild(souc);
            tab.splice(j, 1);
        }
    }
}
//la fonction fait disparaitre les tiirs une fois au bord du cadre .
function limitTirs() {
    for (let i = 0; i < tableaux.length; i++) {
        if (tableaux[i].posX + 20 > 980) {
            let tirs = document.getElementById("tirons" + tableaux[i].id);
            tirs.parentNode.removeChild(tirs);
            tableaux.splice(i, 1);
        }
    }
}
