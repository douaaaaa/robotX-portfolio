document.querySelector("#home .home .fa-circle-up").addEventListener("click", () => {
    window.scrollTo(0, 0);
})

// check();
// console.log(window.scrollY);
// function check() {
//     if (window.scrollY >= 300) {
//         document.querySelector("#home .home .fa-circle-up").style.display = "block"
//     } else {
//         document.querySelector("#home .home .fa-circle-up").style.display = "none"
//     }
// }

window.onscroll = function () {
    if (window.scrollY >= 400) {
        document.querySelector("#home .home .fa-circle-up").style.display = "block";
    } else {
        document.querySelector("#home .home .fa-circle-up").style.display = "none";
    }
}