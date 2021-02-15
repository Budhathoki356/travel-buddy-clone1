const slider = document.querySelector('.slider')

const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

let setIndex = 0;

leftArrow.addEventListener('click', () => {
    setIndex = (setIndex > 0) ? setIndex - 1 : 0;
    slider.style.transform = 'translate(' + (setIndex) * -33 + '%)';
})

rightArrow.addEventListener('click', () => {
    setIndex = (setIndex < 2) ? setIndex + 1 : 2;
    slider.style.transform = 'translate(' + (setIndex) * -33 + '%)';
})

