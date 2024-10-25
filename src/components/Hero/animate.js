// src/animations.js
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

export const animateTitles = (container) => {
  const titles = gsap.utils.toArray(container.querySelectorAll('p'));
  const tl = gsap.timeline({ repeat: -1, repeatDelay: .5 }); // Repeat infinitely

  titles.forEach(title => {
    const splitTitle = new SplitTextJS(title);

    tl
      .from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: .07,
      }, "<")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -90,
        rotateX: 90,
        stagger: .02,
      }, "<1");
  });
};
