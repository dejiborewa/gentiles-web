let slideIndex = 1;
  
const nextSlide = (n) => {
    currentSlide(slideIndex += n) // slideIndex + (1)
}
  
const prevSlide = (n) => {
    currentSlide(slideIndex += n) // slideIndex + (-1)
}

const currentSlide = (n) => {
    showSlide(slideIndex = n)
}

const showSlide = (n) => {
    const slides = document.getElementsByClassName('slides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) { // reset slider when 'next' ends
      slideIndex = 1
    }

    if (n < 1) {  // reset slider when 'prev' ends
      slideIndex = slides.length; 
    }

    for (let i = 0; i < slides.length; i++) { // hides other slides
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {    
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block'; // display current slide
    dots[slideIndex - 1].className += ' active'
}




/* exports.nextSlide = nextSlide
exports.prevSlide = prevSlide
exports.currentSlide = currentSlide
 
*/

export { nextSlide, prevSlide, currentSlide }