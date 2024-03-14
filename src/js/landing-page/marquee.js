import getNewAnimationDuration from '../utils/update-marquee-animation';

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.landing-page__marquee');
  const marqueeTexts = document.querySelectorAll('.marquee-text--landing-page');
  marqueeTexts.forEach((marqueeText) => {
    marqueeText.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeText,
    );
  })
}

updateMarqueeAnimation(); // initial render

window.addEventListener('resize', updateMarqueeAnimation);
