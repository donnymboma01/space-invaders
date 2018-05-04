//B112, MBOMA DONNY-49829
let comptage = 0;
class Soucoupe {
    //Prend en paramètre les deux positions du soucoupe.
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.img = "images/flyingSaucer-petit.png";
        this.id = "a" + comptage++;
    }
    get posX() {
        return this._posX;
    }
    set posX(value) {
        this._posX = value;
    }
    get posY() {
        return this._posY;
    }
    set posY(value) {
        this._posY = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    //Necessaire pour afficher la soucoupe
    initHtml() {
        var soucoupe = document.createElement("img");
        soucoupe.setAttribute("id", "souc" + this.id);
        document.getElementById("game").appendChild(soucoupe);

    }
    //affiche la soucoupe dans sa position actuelle dans le jeu.
    display() {
        var soucoupe = document.getElementById("souc" + this.id);
        soucoupe.style.position = "absolute";
        soucoupe.src = this.img;
        soucoupe.style.top = this.posY + "px";
        soucoupe.style.left = this.posX + "px";


    }
    //Avance la position de la soucoupe verticalement et horizontalement.
    move() {
       // if (this.posY > 10 && this.posY  < 360) {
            var y = Math.floor(Math.random() * (2 - (-2)) + (-2));
            this.posY -= y;
            this.posX -= 5;
            this.display();
       // }


    }


}
