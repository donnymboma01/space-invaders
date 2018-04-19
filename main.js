
//on afffiche le vaisseau su le champ de bataille,pour mon cas ca sera un petit vaisseau.

var afficherLeVaisseaux = new Vaisseau("images/vaisseau-ballon-petit.png");
afficherLeVaisseaux.initHtml();

//la foncttion permet de deplacer le vaisseau sur le champ de bataille.

function affKeyCode(event) {
    var key = event.keyCode;
    if (key==38){
        afficherLeVaisseaux.move(-20);
    }
    if(key==40){
        afficherLeVaisseaux.move(20);
    }
}
