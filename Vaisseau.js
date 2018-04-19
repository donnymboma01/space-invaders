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
    dislay() {
        var vaisseau = document.getElementById('vaisseau');
        vaisseau.src = this.img;
        vaisseau.style.top = this.posY + "px";
        vaisseau.style.left = this.posX + "px";

    }
    //cette fonction permet de bouger le vaisseau en tenant compte du bouton appuyé vers le haut et vers le bas.
    //le vaisseau ne doit pas depasser le cadre.

    move(distance) {
        if (this.posY + distance > 0 && this.posY + distance < 400) {
            this.posY += distance;
            this.dislay();

        }
    }
}