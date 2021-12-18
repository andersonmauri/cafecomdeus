//animação menu
let list = document.querySelectorAll('.list');
function setActiveCLass() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('mouseover', setActiveCLass)
)


// slideshow

let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

document.querySelector('.slides').style.width =
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;


function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;

    }
    updateMargin();

}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;

    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slides').style.marginLeft =
        `-${newMargin}px`;
}


setInterval(goNext, 6000);


// gallery item filter

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}



