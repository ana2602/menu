const btnMenu = document.getElementById("hamburguer-button");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function() {
    const expanded = this.getAttribute("aria-expanded") === "true";

    if (expanded) {
        menu.classList.remove("menu-open");
        this.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
    } else {
        menu.classList.add("menu-open");
        this.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
    }
});