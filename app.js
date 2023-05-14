const slides = document.querySelector(".carousel_slides");
const slideList = Array.from(slides.children);
const prevButton = document.querySelector(".carousel_control_left");
const nextButton = document.querySelector(".carousel_control_right");
const navSlide = document.querySelector(".carousel_nav");
const dotsNav = Array.from(navSlide.children);
const slideSpace = slides.getBoundingClientRect().width;
//arranging slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideSpace * index + 'px';
}
slideList.forEach(setSlidePosition);
//function perform sliding
const moveToSlide = (slides, currentSlide, targetSlide) => {
  slides.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current_slide');
  targetSlide.classList.add('current_slide');
}
// function to update nav
const updateNav = (currentDot, targetDot) => {
  currentDot.classList.remove('current_pointer');
  targetDot.classList.add('current_pointer');
}
//function to hide/show nav controls
const showHideControls = (slideList, targetIndex, prevButton, nextButton) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slideList.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}
//when i click left move slides to the left
prevButton.addEventListener('click', e => {
  currentSlide = slides.querySelector('.current_slide');
  prevSlide = currentSlide.previousElementSibling;
  const currentDot = navSlide.querySelector(".current_pointer");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slideList.findIndex(slide => slide === prevSlide);
  moveToSlide(slides, currentSlide, prevSlide);
  updateNav(currentDot, prevDot);
  showHideControls(slideList, prevIndex, prevButton, nextButton);
  autoInterval(false);
  setTimeout(() => { autoInterval(true) }, 3000);
})
//when i click right move slide to the right
nextButton.addEventListener('click', e => {
  const currentSlide = slides.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = navSlide.querySelector('.current_pointer');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slideList.findIndex(slide => slide === nextSlide);
  moveToSlide(slides, currentSlide, nextSlide);
  updateNav(currentDot, nextDot);
  showHideControls(slideList, nextIndex, prevButton, nextButton);
  autoInterval(false);
  setTimeout(() => { autoInterval(true) },3000);
})
//when i click the slide indicator, move to that slide
navSlide.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = slides.querySelector('.current_slide');
  const currentDot = navSlide.querySelector('.current_pointer');
  const targetIndex = dotsNav.findIndex(dot => dot === targetDot);
  const targetSlide = slideList[targetIndex];
  moveToSlide(slides, currentSlide, targetSlide);
  updateNav(currentDot, targetDot);
  showHideControls(slideList, targetIndex, prevButton, nextButton);
  autoInterval(false);
  setTimeout(() => { autoInterval(true) }, 3000);
})

function autoSlide() {
  const currentSlide = slides.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = navSlide.querySelector('.current_pointer');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slideList.findIndex(slide => slide === nextSlide);
  const prevSlide = currentSlide.previousElementSibling;
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slideList.findIndex(slide => slide === prevSlide);
  if (nextSlide === null) {
    moveToSlide(slides, currentSlide, prevSlide);
    updateNav(currentDot, prevDot);
    showHideControls(slideList, prevIndex, prevButton, nextButton);
  }
  moveToSlide(slides, currentSlide, nextSlide);
  updateNav(currentDot, nextDot);
  showHideControls(slideList, nextIndex, prevButton, nextButton);
}

const autoInterval = (flag=true) => {

  if (flag) {
   myInterval = setInterval(autoSlide, 3000);
  }
  else {
      clearInterval(myInterval);
    }
  }
