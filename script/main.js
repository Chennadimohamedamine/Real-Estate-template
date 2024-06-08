
//  ================ dom variable ==================

let menu = document.getElementsByClassName("btn-menu")[0];
let menu_active = document.getElementsByClassName("navbar")[0];
let item_option1 = document.querySelectorAll(".container-home > div:nth-child(1) > form > div:nth-of-type(2) > ul > li");
let item_select_1 = document.querySelectorAll(".container-home > div:nth-child(1) > form > div:nth-of-type(2) > div > span > span")[0];
let item_select_1_ = document.querySelectorAll(".container-home > div:nth-child(1) > form > div:nth-of-type(2) > div > span > span")[1];
let item_select_2 = document.querySelectorAll(".container-home > div:nth-child(1) > form > div:nth-of-type(3) > div")[0];
let item_option_2 = document.querySelectorAll(".container-home > div:nth-child(1) > form > div:nth-of-type(3) > ul > li");
let targget_option = document.querySelectorAll(".select-option")[0];


// ====================variable ==============
let scol;
// ===================== code [function] =======
menu.onclick = () => {
    menu.classList.toggle("btn-menu-active");
    menu_active.classList.toggle("active-menu");
}

// addEventListener("scroll", () => {
//     if (scol > window.scrollY)
//         document.body.children[0].classList.add("scroll-header");
//     else if (window.scrollY > scol)
//         document.body.children[0].classList.remove("scroll-header");
//     scol = window.scrollY;
//     if (menu.classList.contains("btn-menu-active")) {
//         menu.classList.remove("btn-menu-active");
//         menu_active.classList.remove("active-menu");
//     }
// })
// item select click event add  option in home section 
item_select_1.parentElement.onclick = () => {
    console.log("hey");
    item_option1[0].parentElement.classList.toggle("active-select-1");
    item_select_1_.classList.toggle("active_btn-item-1");
};
//  item -option in home section
item_option1.forEach((e) => {
    e.onclick = () => {
        item_option1.forEach((e) => {
            if (e.classList.contains("this-option"))
                e.classList.remove("this-option");
        });
        e.classList.add("this-option");
        item_select_1.innerText = e.getAttribute("data-value");
        e.parentElement.classList.remove("active-select-1");
        item_select_1_.children[0].classList.remove("active_btn-item-1");
    }
});
// item select 2  click event add  option in home section 
item_select_2.parentElement.onclick = () => {
    console.log("log");
    item_option_2[0].parentElement.classList.toggle("active-select-2");
};
//  item -option in home section 2 
item_option_2.forEach((e) => {
    e.onclick = () => {
        item_option_2.forEach((e) => {
            if (e.classList.contains("this-option"))
                e.classList.remove("this-option");
        });
        e.classList.add("this-option");
        targget_option.innerText = e.getAttribute("data-value");
        item_option_2[0].parentElement.classList.remove("active-select-2");
    }
});