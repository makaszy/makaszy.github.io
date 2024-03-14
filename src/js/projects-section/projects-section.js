import getNewAnimationDuration from '../utils/update-marquee-animation';
import createObserver from '../utils/create-observer';

// marquee

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.projects__marquee');
  const marqueeTexts = document.querySelectorAll('.marquee-text--projects');

  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  // adjust speed for vertical animation based on screen size
  if (width < 1200) {
    marqueeTexts.forEach(
      (marqueeText) =>
        (marqueeText.style.animationDuration = getNewAnimationDuration(
          marquee,
          marqueeText,
        )),
    );
  } else {
    marqueeTexts.forEach((marqueeText) => {
      marqueeText.style.animationDuration = getNewAnimationDuration(
        marquee,
        marqueeText,
        undefined, // use the default value of 70
        'vertical',
      );
    });
  }
}

updateMarqueeAnimation(); // initial render
window.addEventListener('resize', updateMarqueeAnimation);

// observer for sliding animation

const observerProjects = createObserver('show');
const hiddenElements = document.querySelectorAll('.hidden--projects');
hiddenElements.forEach((el) => observerProjects.observe(el));
