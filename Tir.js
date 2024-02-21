
let compt = 0;
class Tir {
    //prend en paramètre les deux positions du tir.
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.img = "images/tir.png";
        this.id = compt++;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
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
    //crée le html necessaire pour le tir
    initHtml() {
        var tirer = document.createElement("img");
        tirer.setAttribute("id", "tirons" + this.id);
        document.getElementById("game").appendChild(tirer);
    }
    //affiche dans le jeu ,le tir à sa position actuelle.
    display() {
        var tirer = document.getElementById("tirons" + this.id);
        tirer.src = this.img;
        tirer.style.position = "absolute";
        tirer.style.top = this.posY + "px";
        tirer.style.left = this.posX + "px";



    }
    //avance la position du tir d'un distance constante.
    move() {
        this.posX += 15;
        this.display();

    }
}
