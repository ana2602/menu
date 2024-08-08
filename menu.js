const btnMenu = document.getElementById("haburguer-button");
const menu = document.getElementById("menu");

btnMenu.setAttribute("aria-expanded", "false");
menu.setAttribute("aria-hidden", "true");

btnMenu.addEventListener("click", function() {
    const expanded = this.getAttribute("aria-expanded") === "true";

    document.removeEventListener("click", closeMenu)

    if (expanded) {
        menu.classList.remove("menu-open");
        this.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
    } else {
        menu.classList.add("menu-open");
        this.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
    }

    document.addEventListener("click", closeMenu)
});
