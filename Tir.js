class Tir {

    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.img="images/tir.png";
        this.id=tableaux.length;
    }
    get id(){
        return this._id;
    }
    set id(value){
        this._id=value;
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
    initHtml(){
        var tirer = document.createElement("img");
        tirer.setAttribute("id","tir"+this.id);
        tirer.src=this.img;
        tirer.style.position="absolute";
        tirer.style.top=this.posY +"px";
        tirer.style.left=this.posX+ "px";
        document.getElementById("game").appendChild(tirer);
    }
    display(){
        var tirer = document.getElementById("tir"+this.id);
        tirer.src=this.img;
        //tirer.style.position="absolute";
        tirer.style.top=this.posY +"px";
        tirer.style.left=this.posX + "px";



    }
    move(){
            this.posX +=10 ;
            this.display();

    }
}
