import getNewAnimationDuration from '../utils/update-marquee-animation';
import createObserver from '../utils/create-observer';

function updateContactMarqueeAnimation() {
  const marquee = document.querySelector('.contact__marquee');
  const marqueeText = document.querySelectorAll('.marquee-text--contact');
  const marqueeTextAlt = document.querySelectorAll(
    '.marquee-text--contact-alt',
  );
  marqueeText.forEach((marqueeTxt) => {
    // eslint-disable-next-line no-param-reassign
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt,
      70,
    );
  });

  marqueeTextAlt.forEach((marqueeTxt) => {
    // eslint-disable-next-line no-param-reassign
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt,
      120,
    );
  });
}

updateContactMarqueeAnimation();
window.addEventListener('resize', updateContactMarqueeAnimation); // initial render

const observerContact = createObserver('show--contact-info');
const contactInfo = document.querySelector('.contact__info');
observerContact.observe(contactInfo);

// handling contact icons

function openEmail() {
  window.location.href = 'mailto:example@example.com';
}

function handleContactIcon(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    openEmail();
  }
}

const contactIcons = document.querySelector('.info-icon--email');

contactIcons.addEventListener('click', handleContactIcon);

contactIcons.addEventListener('keydown', handleContactIcon);

//update contact heading based on size of screen

function updateHeadingOnResize() {
  const heading = document.querySelector('.info__heading');

  // Determine the text content based on the screen width
  const textContent =
    window.innerWidth > 1200
      ? `Let's make<br> something <span class="info__heading--span">fun</span><br> together!`
      : `Let's work together!`;
  heading.innerHTML = textContent;
}

window.addEventListener('resize', updateHeadingOnResize);
updateHeadingOnResize();

//Create rotating contact me decoration

function addDecorationText() {
  const decoration = document.querySelector('.decoration--contact-me');
  const strTxt = 'CONTACT ME CONTACT ME CONTACT ME';
  for (let i = 0; i < strTxt.length; i++) {
    let span = document.createElement('span');
    span.classList.add('decoration-span--contact-me');
    span.innerHTML = strTxt[i];
    decoration.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }
}

window.onload = addDecorationText;
