import getNewAnimationDuration from '../utils/update-marquee-animation';
import createObserver from '../utils/create-observer';
import decorObserver from '../utils/decorObserver';

/* function updateMarqueeAnimation() {
  const marquee = document.querySelector('.about__marquee');
  const marqueeText = document.querySelector('.marquee-text--about');
  marqueeText.style.animationDuration = getNewAnimationDuration(
    marquee,
    marqueeText,
  );
}  */

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.about__marquee');
  const marqueeTexts = document.querySelectorAll('.marquee-text--about');
  marqueeTexts.forEach((marqueeText) => {
    marqueeText.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeText,
    );
  });
}

updateMarqueeAnimation(); // initial render
window.addEventListener('resize', updateMarqueeAnimation);

// observer for sliding animation
const observerAbout = createObserver('show');
const hiddenElements = document.querySelectorAll('.hidden--tech-list');
hiddenElements.forEach((el) => observerAbout.observe(el));

//observe intersection decoration
const interDecor = document.querySelector('.inter-section-decoration--about');
decorObserver.observe(interDecor);

// observe last item on the tech-list and overrides sidebar-btn color to fit the background

const sidebarBtn = document.querySelector('.sidebar-btn--hamburger');
const lastTechListItem = document.querySelector('.tech-list__li:last-child');

const observerSidebarBtn = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sidebarBtn.classList.add('override-color--sidebar-btn');
    } else {
      sidebarBtn.classList.remove('override-color--sidebar-btn');
    }
  });
});

observerSidebarBtn.observe(lastTechListItem);
