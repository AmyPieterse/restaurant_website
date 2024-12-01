window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
        document.body.classList.add('scroll');
    } else{
        document.body.classList.remove('scroll');
    }
});