// root.js

window.APP = {
    scrollOffset: 20
};

document.addEventListener("DOMContentLoaded", () => {

    const topButton = document.getElementById("top-button");

    if (!topButton) return; // nếu trang không có button thì dừng

    window.addEventListener("scroll", () => {
        if (window.scrollY > APP.scrollOffset) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

// ----------------------------------------------------------------------------------------------------

function openDevice(deviceName) {
    var i;
    var x = document.getElementsByClassName("device");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(deviceName).style.display = "flex";
}

const buttons = document.querySelectorAll(".tab-nav button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// ----------------------------------------------------------------------------------------------------
// không download hình

document.addEventListener("contextmenu", e => e.preventDefault());