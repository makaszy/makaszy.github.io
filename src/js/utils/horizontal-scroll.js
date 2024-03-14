const scrollSpeedMultiplier = 2;

const handleHorizontalScroll = function (event) {
  if (event.deltaY != 0) {
    // Prevent vertical scrolling
    event.preventDefault();
    // Scroll horizontally instead
    this.scrollLeft += (event.deltaY + event.deltaX) * scrollSpeedMultiplier;
  }
};

function enableHorizontalScroll() {
  // adds horizontal scroll event listener to main
  document
    .querySelector('main')
    .addEventListener('wheel', handleHorizontalScroll, { passive: false });
}

function disableHorizontalScroll() {
  // removes horizontal scroll event listener from main
  document
    .querySelector('main')
    .removeEventListener('wheel', handleHorizontalScroll, { passive: false });
}

function handleResize() {
  // adds or removes horizontal scroll based on size
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width < 1200) {
    disableHorizontalScroll();
  } else {
    enableHorizontalScroll();
  }
}

window.addEventListener('resize', handleResize); // resize event listener

handleResize(); // handle resize upon render
