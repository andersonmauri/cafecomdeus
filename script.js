//animação menu
let list = document.querySelectorAll('.list');
function setActiveCLass (){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=>
    item.addEventListener('mouseover', setActiveCLass)
)


// slideshow

let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide =0;

document.querySelector('.slides').style.width = 
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = 
    `${document.querySelector( '.slider').clientHeight}px`;


function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;

    }
    updateMargin();

}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;

    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slides').style.marginLeft = 
    `-${newMargin}px`;
}


//setInterval (goNext, 6000);