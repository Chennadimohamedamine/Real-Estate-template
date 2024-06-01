
//  ================ dom variable ==================

let menu = document.getElementsByClassName("btn-menu")[0];
let menu_active = document.getElementsByClassName("navbar")[0];

// ====================variable ==============
let scol;
// ===================== code [function] =======
menu.onclick = () => {
    menu.classList.toggle("btn-menu-active");
    menu_active.classList.toggle("active-menu");
}

addEventListener("scroll", () => {
    if (scol > window.scrollY)
        document.body.children[0].classList.add("scroll-header");
    else if (window.scrollY > scrol)
        document.body.children[0].classList.remove("scroll-header");
    scol = window.scrollY;
    if (menu.classList.contains("btn-menu-active")) {
        menu.classList.remove("btn-menu-active");
        menu_active.classList.remove("active-menu");
    }
})