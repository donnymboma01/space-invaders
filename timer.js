//B112,MBOMA DONNY-49829
let cpt = 0;
let score = 0;
//La méthode declanche le chronomètre dès le debut du jeu.

function augmenter() {
    document.getElementById("chronotime").innerHTML ="00 :"+cpt;
    if(cpt <30){
        cpt ++;

//        console.log("le chrono demarre ! ")
    }
    if(cpt < 10) {
        cpt = "0"+cpt;
    }
    if(cpt == 30) {
        document.getElementById("chronotime").style.color = "red";
        console.log("le jeu est terminé !");
    }

}

