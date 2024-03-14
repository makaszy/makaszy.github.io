function getNewAnimationDuration(
  marquee,
  marqueeText,
  speed = 70,
  position = 'horizontal',
) {
  // check if function parameters are correct
  if (typeof speed !== 'number') {
    throw new Error('Speed parameter must be a number');
  }
  if (position !== 'horizontal' && position !== 'vertical') {
    throw new Error(
      'Position parameter must be either "horizontal" or "vertical"',
    );
  }
  // if marquee is horizontal use width, if vertical use height
  const marqueeSize =
    position === 'horizontal' ? marquee.offsetWidth : marquee.offsetHeight;
  const textSize =
    position === 'horizontal'
      ? marqueeText.offsetWidth
      : marqueeText.offsetHeight;

  // calculate the duration
  const duration = (marqueeSize + textSize) / speed;

  // turn duration into a string
  const newAnimationDuration = `${duration}s`;
  return newAnimationDuration;
}

export default getNewAnimationDuration;
