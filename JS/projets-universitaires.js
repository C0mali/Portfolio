const seeMores = document.querySelectorAll(".seeMore");
const projs = document.querySelectorAll(".proj");
console.log(document);

seeMores.forEach((currentValue, currentIndex) => {
    currentValue.addEventListener("click", () => {
        // console.log(currentValue);
        // console.log("Num dans la liste" + currentIndex);
        // console.log("Parent du bouton" + projs.item(currentIndex));
        let proj = projs.item(currentIndex);
        let visib = currentValue.getAttribute("visib");
        if(visib === "hidden") {
            afficherProj(proj, currentValue, visib);
        } else {
            cacherProj(proj, currentValue, visib);
        }
        
    });
});


function afficherProj(proj, button, visib) {
    let hidden = proj.querySelector(".hidden");
    let desc = proj.querySelector(".desc");
    projMillieu(proj);
    cacherDesc(desc);
    afficherHidden(hidden);
    changeButton(button, visib);
}
function projMillieu(proj) {
    proj.setAttribute("center", "true");
    proj.style.position = "fixed";
    proj.style.top = "50%";
    proj.style.left = "50%";
    proj.style.transform = "translate(-50%, -50%)";
}
function cacherDesc(desc) {
    desc.style.display = "none";
}
function afficherHidden(hidden) {
    hidden.style.display = "flex";
    hidden.style.flexDirection = "column";
    hidden.style.alignItems = "center";
}

function cacherProj(proj, button, visib) {
    let hidden = proj.querySelector(".hidden");
    let desc = proj.querySelector(".desc");

    projBack(proj);
    afficherDesc(desc);
    hideHidden(hidden);
    changeButton(button, visib);
}
function projBack(proj) {
    proj.setAttribute("center", "false");
    proj.style.position = "inherit";
    proj.style.removeProperty("top");
    proj.style.removeProperty("left");
    proj.style.removeProperty("transform");
}
function afficherDesc(desc) {
    desc.style.display = "block";
}
function hideHidden(hidden) {
    hidden.style.display = "none";
}

function changeButton(button, visib) {
    if (visib === "hidden") {
        button.textContent = "Fermer";
        button.setAttribute("visib", "visible");
    } else {
        button.textContent = "Voir plus";
        button.setAttribute("visib", "hidden");
    }
}