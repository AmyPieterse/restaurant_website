const slider = document.querySelector('.slider')


const scrolled = () => {
    if (window.scrollY > 0) {
        document.body.classList.add('scroll');
    } else {
        document.body.classList.remove('scroll');
    }
};

scrolled(); //navbar transparent scroll

window.addEventListener('scroll', scrolled);
window.addEventListener('focus', scrolled);

let sliderGrabbed = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e)=>{
    sliderGrabbed=true;
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})

slider.addEventListener('mouseup', (e)=>{
    sliderGrabbed=false;
    slider.classList.remove('active')
})

slider.addEventListener('mouseleave', (e)=>{
    sliderGrabbed=false;
    slider.classList.remove('active')
})


slider.addEventListener('mousemove', (e)=>{
    if(!sliderGrabbed) return
    e.preventDefault();
    const x =  e.pageX - slider.offsetLeft;
    console.log({x,startX})
    const walk = x-startX;
    slider.scrollLeft = scrollLeft -walk;
    // console.count(sliderGrabbed)
    // console.log(startX)
    // if (sliderGrabbed){
    //     slider.parentElement.scrollLeft-=e.movementX; 
    // }
})





