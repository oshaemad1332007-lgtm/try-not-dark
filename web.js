// ----------------------------------------------------
// ----------------------------------------------------
// slide par

let sidebar = document.getElementById("sidebar");

function toggleSidebar() {
sidebar.classList.toggle("active");
}






// ---------------------------------------------------------
// ------------------------------------------------------------
// change btn


let btn2 = document.querySelector(".btn2");
let cards = document.querySelectorAll(".cardsimg");



if (localStorage.getItem("mode_change") === "change") {
cards.forEach(el => el.classList.add("change"));
}

btn2.onclick = function () {
cards.forEach(el => el.classList.toggle("change"));

if (cards[0].classList.contains("change")) {
    localStorage.setItem("mode_change", "change");
} else {
    localStorage.setItem("mode_change", "notchange");
}
};


