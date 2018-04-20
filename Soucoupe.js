let comptage= 0;
class Soucoupe {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.img = "images/flyingSaucer-petit.png";
        this.id ;
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
    initHtml() {
        var soucoupe = document.createElement("img");
        soucoupe.setAttribute("id", this.id);
        soucoupe.src = this.img;
        soucoupe.style.position = "absolute";
        soucoupe.style.top = this.posY + "px";
        soucoupe.style.left = this.posX + "px";
        document.getElementById("game").appendChild(soucoupe);

    }
    display() {
        var soucoupe = document.createElement(this.id);
        soucoupe.style.top=this.posY +"px";
        soucoupe.style.left=this.posX + "px";


    }
    move() {

    }
}
