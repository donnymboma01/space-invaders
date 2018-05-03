//B112,MBOMA DONNY-49829
// Classe représentant le vaisseau
class Vaisseau {

    // Constructeur
    constructor(img) {
        this.posX = 40;
        this.posY = 200;
        this.img = img;

    }

    get posY() {
        return this._posY;
    }

    set posY(value) {
        this._posY = value;
    }

    get posX() {
        return this._posX;
    }

    set posX(value) {
        this._posX = value;
    }


    // Initialise le vaisseau dans le html
    initHtml() {
        var vaisseau = document.getElementById('vaisseau');
        vaisseau.src = this.img;
        vaisseau.style.position = "absolute";
        vaisseau.style.top = this.posY + "px";
        vaisseau.style.left = this.posX + "px";
    }
    //affiche le vaisseau à sa position actuelle.
    dislay() {
        var vaisseau = document.getElementById('vaisseau');
        vaisseau.src = this.img;
        vaisseau.style.top = this.posY + "px";
        vaisseau.style.left = this.posX + "px";

    }
    //cette fonction permet de bouger le vaisseau en tenant compte du bouton appuyé vers le haut et vers le bas.
    //le vaisseau ne doit pas depasser le cadre.

    move(distance) {
        if (this.posY + distance > 10 && this.posY + distance < 370) {
            this.posY += distance;
            this.dislay();

        }
    }
    //méthode arme le vaisseau des munitions necessaire pour combattre sur le champ de bataille.

    fire() {
        let tirer = new Tir(87, this.posY + 10);
        tirer.initHtml();
        return tirer;
    }
}
