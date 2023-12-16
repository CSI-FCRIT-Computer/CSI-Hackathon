const stickySections = [...document.querySelectorAll('.main')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.timeline-container')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
  
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;

}