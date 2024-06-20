
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