
function Pt_click(id) {
    const menuItems = document.getElementsByClassName("pt_item");
    const contItems = document.getElementsByClassName("pt_cont");
    for (let i = 0; i < 8; i++) {
        menuItems[i].classList.remove("active"); 
        contItems[i].classList.remove("pt_unhide");
    }
    const activeMenu = document.getElementById(id);
    const activeCont = document.getElementById("cont_"+id);
    activeMenu.classList.add("active");
    activeCont.classList.add("pt_unhide");
} 


function Pt_click_sm(id) {
    const menuItems = document.getElementsByClassName("pt_item_sm");
    const contItemsSm = document.getElementsByClassName("pt_cont_sm");
    for (let i = 0; i < 8; i++) {
        menuItems[i].classList.remove("active"); 
        contItemsSm[i].classList.remove("pt_unhide");
    }
    const activeMenu = document.getElementById(id);
    const activeCont = document.getElementById("cont_"+id);
    activeMenu.classList.add("active");
    activeCont.classList.add("pt_unhide");
} 

