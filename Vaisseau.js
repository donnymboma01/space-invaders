// Classe représentant le vaisseau
class Vaisseau{

    // Constructeur
    constructor(img){
        this.posX = 320;
        this.posY = 200;
        this.img = img;
        // A compléter
    }

    get posY(){
        return this._posY;
    }

    set posY(value){
        this._posY = value;
    }

    get posX(){
        return this._posX;
    }

    set posX(value){
        this._posX = value;
    }


    // Initialise le vaisseau dans le html
    initHtml(){
        var vaisseau = document.getElementById('vaisseau');
        vaisseau.src = this.img;
        vaisseau.style.position = "absolute";
        vaisseau.style.top = this.posY+"px";
        vaisseau.style.left = this.posX+"px";
    }
    dislay() {
        initHtml();
    }

}
