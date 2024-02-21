//MBOMA-DONNY B112
let temps = 0;
let name = null;
let point = 0;


//La méthode declanche le chronomètre dès le debut du jeu et l'arrete au bout de 30 secondes.

function augmenterTemps() {

    if (temps < 31) {
        temps += 0.067;
        document.getElementById('chronotime').innerHTML = Math.round(temps);
        if (temps < 31 && temps < 10) {
            document.getElementById('chronotime').innerHTML = "0" + Math.round(temps);
        }
    }
    if (temps >= 30) {
        alert(name + " votre score  est de :" + score);
        if (score > point) {
            changeScore();
            changeName();
        }
        location.reload();
    }

}
//permet de stocker le nom du joueur.
function loadName() {
    name = localStorage.getItem("name");
    if (!name) {
        name = "inconnu";
    }

}
//permte de sauver le nom du joeur
function saveName() {
    localStorage.setItem("name", name)
}
//permet de changer le nom du joueur
function changeName() {
    name = prompt(" entrez un nouveau joueur :");
    saveName();
    updateUI();

}
//fait une update du nom dans le html.
function updateUI() {
    $("#name").text(name);
}
//permet de charger le score
function loadScore() {
    point = localStorage.getItem("meilleur");
}
//sauve localement le score
function saveScore() {
    localStorage.setItem("meilleur", point)
}
//change le score sauvé à un nouveau qui est meilleur que le precedent
function changeScore() {
    point = score;
    saveScore();
    updateUIScore();
}
//change le score dans le html
function updateUIScore() {
    $("#meilleur").text(point);
}
