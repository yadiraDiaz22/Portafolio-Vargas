// menu cuando se hace chico/// 
let menuIcon = document.querySelector(".menu-icon"); // Girar las lineas horizontales a X
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{// Girar las lineas horizontales a X
    menuIcon.classList.toggle("active");// Girar las lineas horizontales a X
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

// switch entre botones de sobre mi /// 
const buttons = document.querySelectorAll('.sobremi-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});




/*NAVBAR cuando le das clic */
let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.sobremi-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.sobremi-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });

/*MODAL DE PROYECTOS */
function openModal(imgPath, ) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    var modalText = document.getElementById('modalText');

    modal.style.display = 'block';
    modalImg.src = imgPath;
    modalText.innerHTML = projectText;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
function changeImage(newImageSrc) {
    var modalImg = currentModal.querySelector('.modal-content');
    modalImg.src = newImageSrc;
}
