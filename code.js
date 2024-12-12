
const slider = document.querySelector('.slider')


const scrolled = () => {
    if (window.scrollY > 0) {
        document.body.classList.add('scroll');
    } else {
        document.body.classList.remove('scroll');
    }
};

scrolled();

window.addEventListener('scroll', scrolled);
window.addEventListener('focus', scrolled);

let sliderGrabbed = false;


slider.addEventListener('mousedown', (e)=>{
    sliderGrabbed=true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e)=>{
    sliderGrabbed=false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e)=>{
    sliderGrabbed=false;
    slider.style.cursor = 'grab';
})


slider.addEventListener('mousemove', (e)=>{
    if (sliderGrabbed){
        slider.parentElement.scrollLeft-=e.movementX; 
    }
})








