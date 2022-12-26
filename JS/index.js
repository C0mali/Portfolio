//================================
//scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    fleche.style.visibility = "hidden";
  } else {
    fleche.style.visibility = "visible";
  }
});
//=================================
//Animation texte
const finPhrase = document.querySelector("#finPhrase");
const textes = ["un étudiant.  ", "curieux.  ", "un grimpeur.  ", "un développeur.  "];
let posTexte = 0;
let texte = 0;
let speed = 200;

function animTexte(){
    speed = Math.floor(Math.random() * (200 - 0)) + 0;
    if(posTexte < textes[texte].length) {
        finPhrase.textContent += textes[texte].charAt(posTexte);
        posTexte += 1;
    } else {
        finPhrase.textContent = "";
        posTexte = 0;
        texte++;
        if(texte >= textes.length) {
            texte = 0;
        }
    }
}
setInterval(animTexte, speed);
//===================================
//Animation fleche
const fleche = document.getElementById("fleche");
let flechePos = 0;
function animationFleche() {
    if (flechePos >= 150) {
        fleche.style.top = "0px";
        flechePos = 0;
    } else {
        flechePos += 1;
        fleche.style.top = flechePos+"px";
    }
    requestAnimationFrame(animationFleche);
}
animationFleche();