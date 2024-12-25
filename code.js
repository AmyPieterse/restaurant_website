const slider = document.querySelector('.slider')
const parallax = document.querySelector('.parallax')


const scrolled = () => {
    // console.log('hello')
    // console.log(parallax.scrollTop)
    if (parallax.scrollTop > 0) {
        parallax.classList.add('scroll');
    } else {
        parallax.classList.remove('scroll');
    }
};

parallax.addEventListener('scroll', scrolled);
parallax.addEventListener('focus', scrolled);

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
})





