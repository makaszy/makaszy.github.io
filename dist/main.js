/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about-me-section/about-me.js":
/*!*********************************************!*\
  !*** ./src/js/about-me-section/about-me.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/update-marquee-animation */ "./src/js/utils/update-marquee-animation.js");
/* harmony import */ var _utils_create_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-observer */ "./src/js/utils/create-observer.js");
/* harmony import */ var _utils_decorObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/decorObserver */ "./src/js/utils/decorObserver.js");




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
  marqueeTexts.forEach(marqueeText => {
    marqueeText.style.animationDuration = (0,_utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(marquee, marqueeText);
  });
}
updateMarqueeAnimation(); // initial render
window.addEventListener('resize', updateMarqueeAnimation);

// observer for sliding animation
const observerAbout = (0,_utils_create_observer__WEBPACK_IMPORTED_MODULE_1__["default"])('show');
const hiddenElements = document.querySelectorAll('.hidden--tech-list');
hiddenElements.forEach(el => observerAbout.observe(el));

//observe intersection decoration
const interDecor = document.querySelector('.inter-section-decoration--about');
_utils_decorObserver__WEBPACK_IMPORTED_MODULE_2__["default"].observe(interDecor);

// observe last item on the tech-list and overrides sidebar-btn color to fit the background

const sidebarBtn = document.querySelector('.sidebar-btn--hamburger');
const lastTechListItem = document.querySelector('.tech-list__li:last-child');
const observerSidebarBtn = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sidebarBtn.classList.add('override-color--sidebar-btn');
    } else {
      sidebarBtn.classList.remove('override-color--sidebar-btn');
    }
  });
});
observerSidebarBtn.observe(lastTechListItem);

/***/ }),

/***/ "./src/js/contact-section/contact-section.js":
/*!***************************************************!*\
  !*** ./src/js/contact-section/contact-section.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/update-marquee-animation */ "./src/js/utils/update-marquee-animation.js");
/* harmony import */ var _utils_create_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-observer */ "./src/js/utils/create-observer.js");


function updateContactMarqueeAnimation() {
  const marquee = document.querySelector('.contact__marquee');
  const marqueeText = document.querySelectorAll('.marquee-text--contact');
  const marqueeTextAlt = document.querySelectorAll('.marquee-text--contact-alt');
  marqueeText.forEach(marqueeTxt => {
    // eslint-disable-next-line no-param-reassign
    marqueeTxt.style.animationDuration = (0,_utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(marquee, marqueeTxt, 70);
  });
  marqueeTextAlt.forEach(marqueeTxt => {
    // eslint-disable-next-line no-param-reassign
    marqueeTxt.style.animationDuration = (0,_utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(marquee, marqueeTxt, 120);
  });
}
updateContactMarqueeAnimation();
window.addEventListener('resize', updateContactMarqueeAnimation); // initial render

const observerContact = (0,_utils_create_observer__WEBPACK_IMPORTED_MODULE_1__["default"])('show--contact-info');
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
  const textContent = window.innerWidth > 1200 ? `Let's make<br> something <span class="info__heading--span">fun</span><br> together!` : `Let's work together!`;
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

/***/ }),

/***/ "./src/js/header/header.js":
/*!*********************************!*\
  !*** ./src/js/header/header.js ***!
  \*********************************/
/***/ (() => {

const hamburger = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidebar.classList.toggle('extend');
});
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(navLink => [navLink.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidebar.classList.toggle('extend');
})]);

/***/ }),

/***/ "./src/js/landing-page/marquee.js":
/*!****************************************!*\
  !*** ./src/js/landing-page/marquee.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/update-marquee-animation */ "./src/js/utils/update-marquee-animation.js");

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.landing-page__marquee');
  const marqueeTexts = document.querySelectorAll('.marquee-text--landing-page');
  marqueeTexts.forEach(marqueeText => {
    marqueeText.style.animationDuration = (0,_utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(marquee, marqueeText);
  });
}
updateMarqueeAnimation(); // initial render

window.addEventListener('resize', updateMarqueeAnimation);

/***/ }),

/***/ "./src/js/projects-section/projects-section.js":
/*!*****************************************************!*\
  !*** ./src/js/projects-section/projects-section.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/update-marquee-animation */ "./src/js/utils/update-marquee-animation.js");
/* harmony import */ var _utils_create_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-observer */ "./src/js/utils/create-observer.js");



// marquee

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.projects__marquee');
  const marqueeTexts = document.querySelectorAll('.marquee-text--projects');
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // adjust speed for vertical animation based on screen size
  if (width < 1200) {
    marqueeTexts.forEach(marqueeText => marqueeText.style.animationDuration = (0,_utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(marquee, marqueeText));
  } else {
    marqueeTexts.forEach(marqueeText => {
      marqueeText.style.animationDuration = (0,_utils_update_marquee_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(marquee, marqueeText, undefined,
      // use the default value of 70
      'vertical');
    });
  }
}
updateMarqueeAnimation(); // initial render
window.addEventListener('resize', updateMarqueeAnimation);

// observer for sliding animation

const observerProjects = (0,_utils_create_observer__WEBPACK_IMPORTED_MODULE_1__["default"])('show');
const hiddenElements = document.querySelectorAll('.hidden--projects');
hiddenElements.forEach(el => observerProjects.observe(el));

/***/ }),

/***/ "./src/js/tech-list-section/tech-list-section.js":
/*!*******************************************************!*\
  !*** ./src/js/tech-list-section/tech-list-section.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_decorObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decorObserver */ "./src/js/utils/decorObserver.js");

const techListDecor = document.querySelector('.inter-section-decoration--tech-list');
_utils_decorObserver__WEBPACK_IMPORTED_MODULE_0__["default"].observe(techListDecor);

/***/ }),

/***/ "./src/js/utils/create-observer.js":
/*!*****************************************!*\
  !*** ./src/js/utils/create-observer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createObserver(className) {
  if (typeof className !== 'string') {
    throw new Error('Invalid argument: className should be a string');
  }
  const handleIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  };
  return new IntersectionObserver(handleIntersection);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createObserver);

/***/ }),

/***/ "./src/js/utils/decorObserver.js":
/*!***************************************!*\
  !*** ./src/js/utils/decorObserver.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_create_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-observer */ "./src/js/utils/create-observer.js");

const decorObserver = (0,_utils_create_observer__WEBPACK_IMPORTED_MODULE_0__["default"])('extend-decor');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorObserver);

/***/ }),

/***/ "./src/js/utils/horizontal-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/utils/horizontal-scroll.js ***!
  \*******************************************/
/***/ (() => {

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
  document.querySelector('main').addEventListener('wheel', handleHorizontalScroll, {
    passive: false
  });
}
function disableHorizontalScroll() {
  // removes horizontal scroll event listener from main
  document.querySelector('main').removeEventListener('wheel', handleHorizontalScroll, {
    passive: false
  });
}
function handleResize() {
  // adds or removes horizontal scroll based on size
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 1200) {
    disableHorizontalScroll();
  } else {
    enableHorizontalScroll();
  }
}
window.addEventListener('resize', handleResize); // resize event listener

handleResize(); // handle resize upon render

/***/ }),

/***/ "./src/js/utils/update-marquee-animation.js":
/*!**************************************************!*\
  !*** ./src/js/utils/update-marquee-animation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getNewAnimationDuration(marquee, marqueeText) {
  let speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 70;
  let position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'horizontal';
  // check if function parameters are correct
  if (typeof speed !== 'number') {
    throw new Error('Speed parameter must be a number');
  }
  if (position !== 'horizontal' && position !== 'vertical') {
    throw new Error('Position parameter must be either "horizontal" or "vertical"');
  }
  // if marquee is horizontal use width, if vertical use height
  const marqueeSize = position === 'horizontal' ? marquee.offsetWidth : marquee.offsetHeight;
  const textSize = position === 'horizontal' ? marqueeText.offsetWidth : marqueeText.offsetHeight;

  // calculate the duration
  const duration = (marqueeSize + textSize) / speed;

  // turn duration into a string
  const newAnimationDuration = `${duration}s`;
  return newAnimationDuration;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNewAnimationDuration);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/js/header/header.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _landing_page_marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/marquee */ "./src/js/landing-page/marquee.js");
/* harmony import */ var _projects_section_projects_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-section/projects-section */ "./src/js/projects-section/projects-section.js");
/* harmony import */ var _about_me_section_about_me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me-section/about-me */ "./src/js/about-me-section/about-me.js");
/* harmony import */ var _contact_section_contact_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-section/contact-section */ "./src/js/contact-section/contact-section.js");
/* harmony import */ var _utils_horizontal_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/horizontal-scroll */ "./src/js/utils/horizontal-scroll.js");
/* harmony import */ var _utils_horizontal_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_horizontal_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tech_list_section_tech_list_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tech-list-section/tech-list-section */ "./src/js/tech-list-section/tech-list-section.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEtBQUssWUFBWSxHQUNyQjdFLFdBQVcsQ0FBQytFLFdBQVcsR0FDdkIvRSxXQUFXLENBQUNnRixZQUFZOztFQUU5QjtFQUNBLE1BQU1FLFFBQVEsR0FBRyxDQUFDSixXQUFXLEdBQUdHLFFBQVEsSUFBSU4sS0FBSzs7RUFFakQ7RUFDQSxNQUFNUSxvQkFBb0IsR0FBSSxHQUFFRCxRQUFTLEdBQUU7RUFDM0MsT0FBT0Msb0JBQW9CO0FBQzdCO0FBRUEsaUVBQWU3Rix1QkFBdUI7Ozs7OztVQy9CdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNPO0FBQ2E7QUFDUjtBQUNNO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9qcy9hYm91dC1tZS1zZWN0aW9uL2Fib3V0LW1lLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2pzL2NvbnRhY3Qtc2VjdGlvbi9jb250YWN0LXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvanMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9qcy9sYW5kaW5nLXBhZ2UvbWFycXVlZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9qcy9wcm9qZWN0cy1zZWN0aW9uL3Byb2plY3RzLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvanMvdGVjaC1saXN0LXNlY3Rpb24vdGVjaC1saXN0LXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvanMvdXRpbHMvY3JlYXRlLW9ic2VydmVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2pzL3V0aWxzL2RlY29yT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvanMvdXRpbHMvaG9yaXpvbnRhbC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvanMvdXRpbHMvdXBkYXRlLW1hcnF1ZWUtYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldE5ld0FuaW1hdGlvbkR1cmF0aW9uIGZyb20gJy4uL3V0aWxzL3VwZGF0ZS1tYXJxdWVlLWFuaW1hdGlvbic7XG5pbXBvcnQgY3JlYXRlT2JzZXJ2ZXIgZnJvbSAnLi4vdXRpbHMvY3JlYXRlLW9ic2VydmVyJztcbmltcG9ydCBkZWNvck9ic2VydmVyIGZyb20gJy4uL3V0aWxzL2RlY29yT2JzZXJ2ZXInO1xuXG4vKiBmdW5jdGlvbiB1cGRhdGVNYXJxdWVlQW5pbWF0aW9uKCkge1xuICBjb25zdCBtYXJxdWVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19tYXJxdWVlJyk7XG4gIGNvbnN0IG1hcnF1ZWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcnF1ZWUtdGV4dC0tYWJvdXQnKTtcbiAgbWFycXVlZVRleHQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBnZXROZXdBbmltYXRpb25EdXJhdGlvbihcbiAgICBtYXJxdWVlLFxuICAgIG1hcnF1ZWVUZXh0LFxuICApO1xufSAgKi9cblxuZnVuY3Rpb24gdXBkYXRlTWFycXVlZUFuaW1hdGlvbigpIHtcbiAgY29uc3QgbWFycXVlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fbWFycXVlZScpO1xuICBjb25zdCBtYXJxdWVlVGV4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFycXVlZS10ZXh0LS1hYm91dCcpO1xuICBtYXJxdWVlVGV4dHMuZm9yRWFjaCgobWFycXVlZVRleHQpID0+IHtcbiAgICBtYXJxdWVlVGV4dC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGdldE5ld0FuaW1hdGlvbkR1cmF0aW9uKFxuICAgICAgbWFycXVlZSxcbiAgICAgIG1hcnF1ZWVUZXh0LFxuICAgICk7XG4gIH0pO1xufVxuXG51cGRhdGVNYXJxdWVlQW5pbWF0aW9uKCk7IC8vIGluaXRpYWwgcmVuZGVyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlTWFycXVlZUFuaW1hdGlvbik7XG5cbi8vIG9ic2VydmVyIGZvciBzbGlkaW5nIGFuaW1hdGlvblxuY29uc3Qgb2JzZXJ2ZXJBYm91dCA9IGNyZWF0ZU9ic2VydmVyKCdzaG93Jyk7XG5jb25zdCBoaWRkZW5FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRkZW4tLXRlY2gtbGlzdCcpO1xuaGlkZGVuRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IG9ic2VydmVyQWJvdXQub2JzZXJ2ZShlbCkpO1xuXG4vL29ic2VydmUgaW50ZXJzZWN0aW9uIGRlY29yYXRpb25cbmNvbnN0IGludGVyRGVjb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXItc2VjdGlvbi1kZWNvcmF0aW9uLS1hYm91dCcpO1xuZGVjb3JPYnNlcnZlci5vYnNlcnZlKGludGVyRGVjb3IpO1xuXG4vLyBvYnNlcnZlIGxhc3QgaXRlbSBvbiB0aGUgdGVjaC1saXN0IGFuZCBvdmVycmlkZXMgc2lkZWJhci1idG4gY29sb3IgdG8gZml0IHRoZSBiYWNrZ3JvdW5kXG5cbmNvbnN0IHNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1idG4tLWhhbWJ1cmdlcicpO1xuY29uc3QgbGFzdFRlY2hMaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWNoLWxpc3RfX2xpOmxhc3QtY2hpbGQnKTtcblxuY29uc3Qgb2JzZXJ2ZXJTaWRlYmFyQnRuID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNpZGViYXJCdG4uY2xhc3NMaXN0LmFkZCgnb3ZlcnJpZGUtY29sb3ItLXNpZGViYXItYnRuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGViYXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcnJpZGUtY29sb3ItLXNpZGViYXItYnRuJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5vYnNlcnZlclNpZGViYXJCdG4ub2JzZXJ2ZShsYXN0VGVjaExpc3RJdGVtKTtcbiIsImltcG9ydCBnZXROZXdBbmltYXRpb25EdXJhdGlvbiBmcm9tICcuLi91dGlscy91cGRhdGUtbWFycXVlZS1hbmltYXRpb24nO1xuaW1wb3J0IGNyZWF0ZU9ic2VydmVyIGZyb20gJy4uL3V0aWxzL2NyZWF0ZS1vYnNlcnZlcic7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRhY3RNYXJxdWVlQW5pbWF0aW9uKCkge1xuICBjb25zdCBtYXJxdWVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX21hcnF1ZWUnKTtcbiAgY29uc3QgbWFycXVlZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFycXVlZS10ZXh0LS1jb250YWN0Jyk7XG4gIGNvbnN0IG1hcnF1ZWVUZXh0QWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLm1hcnF1ZWUtdGV4dC0tY29udGFjdC1hbHQnLFxuICApO1xuICBtYXJxdWVlVGV4dC5mb3JFYWNoKChtYXJxdWVlVHh0KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgbWFycXVlZVR4dC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGdldE5ld0FuaW1hdGlvbkR1cmF0aW9uKFxuICAgICAgbWFycXVlZSxcbiAgICAgIG1hcnF1ZWVUeHQsXG4gICAgICA3MCxcbiAgICApO1xuICB9KTtcblxuICBtYXJxdWVlVGV4dEFsdC5mb3JFYWNoKChtYXJxdWVlVHh0KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgbWFycXVlZVR4dC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGdldE5ld0FuaW1hdGlvbkR1cmF0aW9uKFxuICAgICAgbWFycXVlZSxcbiAgICAgIG1hcnF1ZWVUeHQsXG4gICAgICAxMjAsXG4gICAgKTtcbiAgfSk7XG59XG5cbnVwZGF0ZUNvbnRhY3RNYXJxdWVlQW5pbWF0aW9uKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlQ29udGFjdE1hcnF1ZWVBbmltYXRpb24pOyAvLyBpbml0aWFsIHJlbmRlclxuXG5jb25zdCBvYnNlcnZlckNvbnRhY3QgPSBjcmVhdGVPYnNlcnZlcignc2hvdy0tY29udGFjdC1pbmZvJyk7XG5jb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19pbmZvJyk7XG5vYnNlcnZlckNvbnRhY3Qub2JzZXJ2ZShjb250YWN0SW5mbyk7XG5cbi8vIGhhbmRsaW5nIGNvbnRhY3QgaWNvbnNcblxuZnVuY3Rpb24gb3BlbkVtYWlsKCkge1xuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdtYWlsdG86ZXhhbXBsZUBleGFtcGxlLmNvbSc7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnRhY3RJY29uKGV2ZW50KSB7XG4gIGlmIChldmVudC50eXBlID09PSAnY2xpY2snIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgIG9wZW5FbWFpbCgpO1xuICB9XG59XG5cbmNvbnN0IGNvbnRhY3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWljb24tLWVtYWlsJyk7XG5cbmNvbnRhY3RJY29ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNvbnRhY3RJY29uKTtcblxuY29udGFjdEljb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVDb250YWN0SWNvbik7XG5cbi8vdXBkYXRlIGNvbnRhY3QgaGVhZGluZyBiYXNlZCBvbiBzaXplIG9mIHNjcmVlblxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkaW5nT25SZXNpemUoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb19faGVhZGluZycpO1xuXG4gIC8vIERldGVybWluZSB0aGUgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSBzY3JlZW4gd2lkdGhcbiAgY29uc3QgdGV4dENvbnRlbnQgPVxuICAgIHdpbmRvdy5pbm5lcldpZHRoID4gMTIwMFxuICAgICAgPyBgTGV0J3MgbWFrZTxicj4gc29tZXRoaW5nIDxzcGFuIGNsYXNzPVwiaW5mb19faGVhZGluZy0tc3BhblwiPmZ1bjwvc3Bhbj48YnI+IHRvZ2V0aGVyIWBcbiAgICAgIDogYExldCdzIHdvcmsgdG9nZXRoZXIhYDtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSB0ZXh0Q29udGVudDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUhlYWRpbmdPblJlc2l6ZSk7XG51cGRhdGVIZWFkaW5nT25SZXNpemUoKTtcblxuLy9DcmVhdGUgcm90YXRpbmcgY29udGFjdCBtZSBkZWNvcmF0aW9uXG5cbmZ1bmN0aW9uIGFkZERlY29yYXRpb25UZXh0KCkge1xuICBjb25zdCBkZWNvcmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY29yYXRpb24tLWNvbnRhY3QtbWUnKTtcbiAgY29uc3Qgc3RyVHh0ID0gJ0NPTlRBQ1QgTUUgQ09OVEFDVCBNRSBDT05UQUNUIE1FJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJUeHQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2RlY29yYXRpb24tc3Bhbi0tY29udGFjdC1tZScpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gc3RyVHh0W2ldO1xuICAgIGRlY29yYXRpb24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgc3Bhbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7MTEgKiBpfWRlZylgO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBhZGREZWNvcmF0aW9uVGV4dDtcbiIsImNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWJ0bicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdleHRlbmQnKTtcbn0pO1xuXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcbm5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspID0+IFtcbiAgbmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnZXh0ZW5kJyk7XG4gIH0pLFxuXSk7XG4iLCJpbXBvcnQgZ2V0TmV3QW5pbWF0aW9uRHVyYXRpb24gZnJvbSAnLi4vdXRpbHMvdXBkYXRlLW1hcnF1ZWUtYW5pbWF0aW9uJztcblxuZnVuY3Rpb24gdXBkYXRlTWFycXVlZUFuaW1hdGlvbigpIHtcbiAgY29uc3QgbWFycXVlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXBhZ2VfX21hcnF1ZWUnKTtcbiAgY29uc3QgbWFycXVlZVRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcnF1ZWUtdGV4dC0tbGFuZGluZy1wYWdlJyk7XG4gIG1hcnF1ZWVUZXh0cy5mb3JFYWNoKChtYXJxdWVlVGV4dCkgPT4ge1xuICAgIG1hcnF1ZWVUZXh0LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gZ2V0TmV3QW5pbWF0aW9uRHVyYXRpb24oXG4gICAgICBtYXJxdWVlLFxuICAgICAgbWFycXVlZVRleHQsXG4gICAgKTtcbiAgfSlcbn1cblxudXBkYXRlTWFycXVlZUFuaW1hdGlvbigpOyAvLyBpbml0aWFsIHJlbmRlclxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlTWFycXVlZUFuaW1hdGlvbik7XG4iLCJpbXBvcnQgZ2V0TmV3QW5pbWF0aW9uRHVyYXRpb24gZnJvbSAnLi4vdXRpbHMvdXBkYXRlLW1hcnF1ZWUtYW5pbWF0aW9uJztcbmltcG9ydCBjcmVhdGVPYnNlcnZlciBmcm9tICcuLi91dGlscy9jcmVhdGUtb2JzZXJ2ZXInO1xuXG4vLyBtYXJxdWVlXG5cbmZ1bmN0aW9uIHVwZGF0ZU1hcnF1ZWVBbmltYXRpb24oKSB7XG4gIGNvbnN0IG1hcnF1ZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX21hcnF1ZWUnKTtcbiAgY29uc3QgbWFycXVlZVRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcnF1ZWUtdGV4dC0tcHJvamVjdHMnKTtcblxuICB2YXIgd2lkdGggPVxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG4gICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgLy8gYWRqdXN0IHNwZWVkIGZvciB2ZXJ0aWNhbCBhbmltYXRpb24gYmFzZWQgb24gc2NyZWVuIHNpemVcbiAgaWYgKHdpZHRoIDwgMTIwMCkge1xuICAgIG1hcnF1ZWVUZXh0cy5mb3JFYWNoKFxuICAgICAgKG1hcnF1ZWVUZXh0KSA9PlxuICAgICAgICAobWFycXVlZVRleHQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBnZXROZXdBbmltYXRpb25EdXJhdGlvbihcbiAgICAgICAgICBtYXJxdWVlLFxuICAgICAgICAgIG1hcnF1ZWVUZXh0LFxuICAgICAgICApKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIG1hcnF1ZWVUZXh0cy5mb3JFYWNoKChtYXJxdWVlVGV4dCkgPT4ge1xuICAgICAgbWFycXVlZVRleHQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBnZXROZXdBbmltYXRpb25EdXJhdGlvbihcbiAgICAgICAgbWFycXVlZSxcbiAgICAgICAgbWFycXVlZVRleHQsXG4gICAgICAgIHVuZGVmaW5lZCwgLy8gdXNlIHRoZSBkZWZhdWx0IHZhbHVlIG9mIDcwXG4gICAgICAgICd2ZXJ0aWNhbCcsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cbnVwZGF0ZU1hcnF1ZWVBbmltYXRpb24oKTsgLy8gaW5pdGlhbCByZW5kZXJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVNYXJxdWVlQW5pbWF0aW9uKTtcblxuLy8gb2JzZXJ2ZXIgZm9yIHNsaWRpbmcgYW5pbWF0aW9uXG5cbmNvbnN0IG9ic2VydmVyUHJvamVjdHMgPSBjcmVhdGVPYnNlcnZlcignc2hvdycpO1xuY29uc3QgaGlkZGVuRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZGVuLS1wcm9qZWN0cycpO1xuaGlkZGVuRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IG9ic2VydmVyUHJvamVjdHMub2JzZXJ2ZShlbCkpO1xuIiwiaW1wb3J0IGRlY29yT2JzZXJ2ZXIgZnJvbSAnLi4vdXRpbHMvZGVjb3JPYnNlcnZlcic7XG5cbmNvbnN0IHRlY2hMaXN0RGVjb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLmludGVyLXNlY3Rpb24tZGVjb3JhdGlvbi0tdGVjaC1saXN0Jyxcbik7XG5cbmRlY29yT2JzZXJ2ZXIub2JzZXJ2ZSh0ZWNoTGlzdERlY29yKTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKGNsYXNzTmFtZSkge1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQ6IGNsYXNzTmFtZSBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgfVxuICBjb25zdCBoYW5kbGVJbnRlcnNlY3Rpb24gPSAoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVJbnRlcnNlY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYnNlcnZlcjtcbiIsImltcG9ydCBjcmVhdGVPYnNlcnZlciBmcm9tICcuLi91dGlscy9jcmVhdGUtb2JzZXJ2ZXInO1xuXG5jb25zdCBkZWNvck9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoJ2V4dGVuZC1kZWNvcicpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvck9ic2VydmVyO1xuIiwiY29uc3Qgc2Nyb2xsU3BlZWRNdWx0aXBsaWVyID0gMjtcblxuY29uc3QgaGFuZGxlSG9yaXpvbnRhbFNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQuZGVsdGFZICE9IDApIHtcbiAgICAvLyBQcmV2ZW50IHZlcnRpY2FsIHNjcm9sbGluZ1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU2Nyb2xsIGhvcml6b250YWxseSBpbnN0ZWFkXG4gICAgdGhpcy5zY3JvbGxMZWZ0ICs9IChldmVudC5kZWx0YVkgKyBldmVudC5kZWx0YVgpICogc2Nyb2xsU3BlZWRNdWx0aXBsaWVyO1xuICB9XG59O1xuXG5mdW5jdGlvbiBlbmFibGVIb3Jpem9udGFsU2Nyb2xsKCkge1xuICAvLyBhZGRzIGhvcml6b250YWwgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRvIG1haW5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlSG9yaXpvbnRhbFNjcm9sbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUhvcml6b250YWxTY3JvbGwoKSB7XG4gIC8vIHJlbW92ZXMgaG9yaXpvbnRhbCBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgZnJvbSBtYWluXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZUhvcml6b250YWxTY3JvbGwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgLy8gYWRkcyBvciByZW1vdmVzIGhvcml6b250YWwgc2Nyb2xsIGJhc2VkIG9uIHNpemVcbiAgdmFyIHdpZHRoID1cbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fFxuICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgaWYgKHdpZHRoIDwgMTIwMCkge1xuICAgIGRpc2FibGVIb3Jpem9udGFsU2Nyb2xsKCk7XG4gIH0gZWxzZSB7XG4gICAgZW5hYmxlSG9yaXpvbnRhbFNjcm9sbCgpO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpOyAvLyByZXNpemUgZXZlbnQgbGlzdGVuZXJcblxuaGFuZGxlUmVzaXplKCk7IC8vIGhhbmRsZSByZXNpemUgdXBvbiByZW5kZXJcbiIsImZ1bmN0aW9uIGdldE5ld0FuaW1hdGlvbkR1cmF0aW9uKFxuICBtYXJxdWVlLFxuICBtYXJxdWVlVGV4dCxcbiAgc3BlZWQgPSA3MCxcbiAgcG9zaXRpb24gPSAnaG9yaXpvbnRhbCcsXG4pIHtcbiAgLy8gY2hlY2sgaWYgZnVuY3Rpb24gcGFyYW1ldGVycyBhcmUgY29ycmVjdFxuICBpZiAodHlwZW9mIHNwZWVkICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignU3BlZWQgcGFyYW1ldGVyIG11c3QgYmUgYSBudW1iZXInKTtcbiAgfVxuICBpZiAocG9zaXRpb24gIT09ICdob3Jpem9udGFsJyAmJiBwb3NpdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdQb3NpdGlvbiBwYXJhbWV0ZXIgbXVzdCBiZSBlaXRoZXIgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiJyxcbiAgICApO1xuICB9XG4gIC8vIGlmIG1hcnF1ZWUgaXMgaG9yaXpvbnRhbCB1c2Ugd2lkdGgsIGlmIHZlcnRpY2FsIHVzZSBoZWlnaHRcbiAgY29uc3QgbWFycXVlZVNpemUgPVxuICAgIHBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBtYXJxdWVlLm9mZnNldFdpZHRoIDogbWFycXVlZS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHRleHRTaXplID1cbiAgICBwb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICA/IG1hcnF1ZWVUZXh0Lm9mZnNldFdpZHRoXG4gICAgICA6IG1hcnF1ZWVUZXh0Lm9mZnNldEhlaWdodDtcblxuICAvLyBjYWxjdWxhdGUgdGhlIGR1cmF0aW9uXG4gIGNvbnN0IGR1cmF0aW9uID0gKG1hcnF1ZWVTaXplICsgdGV4dFNpemUpIC8gc3BlZWQ7XG5cbiAgLy8gdHVybiBkdXJhdGlvbiBpbnRvIGEgc3RyaW5nXG4gIGNvbnN0IG5ld0FuaW1hdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259c2A7XG4gIHJldHVybiBuZXdBbmltYXRpb25EdXJhdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmV3QW5pbWF0aW9uRHVyYXRpb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL2xhbmRpbmctcGFnZS9tYXJxdWVlJztcbmltcG9ydCAnLi9wcm9qZWN0cy1zZWN0aW9uL3Byb2plY3RzLXNlY3Rpb24nO1xuaW1wb3J0ICcuL2Fib3V0LW1lLXNlY3Rpb24vYWJvdXQtbWUnO1xuaW1wb3J0ICcuL2NvbnRhY3Qtc2VjdGlvbi9jb250YWN0LXNlY3Rpb24nO1xuaW1wb3J0ICcuL3V0aWxzL2hvcml6b250YWwtc2Nyb2xsJztcbmltcG9ydCAnLi90ZWNoLWxpc3Qtc2VjdGlvbi90ZWNoLWxpc3Qtc2VjdGlvbic7Il0sIm5hbWVzIjpbImdldE5ld0FuaW1hdGlvbkR1cmF0aW9uIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWNvck9ic2VydmVyIiwidXBkYXRlTWFycXVlZUFuaW1hdGlvbiIsIm1hcnF1ZWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYXJxdWVlVGV4dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm1hcnF1ZWVUZXh0Iiwic3R5bGUiLCJhbmltYXRpb25EdXJhdGlvbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnNlcnZlckFib3V0IiwiaGlkZGVuRWxlbWVudHMiLCJlbCIsIm9ic2VydmUiLCJpbnRlckRlY29yIiwic2lkZWJhckJ0biIsImxhc3RUZWNoTGlzdEl0ZW0iLCJvYnNlcnZlclNpZGViYXJCdG4iLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidXBkYXRlQ29udGFjdE1hcnF1ZWVBbmltYXRpb24iLCJtYXJxdWVlVGV4dEFsdCIsIm1hcnF1ZWVUeHQiLCJvYnNlcnZlckNvbnRhY3QiLCJjb250YWN0SW5mbyIsIm9wZW5FbWFpbCIsImxvY2F0aW9uIiwiaHJlZiIsImhhbmRsZUNvbnRhY3RJY29uIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiY29udGFjdEljb25zIiwidXBkYXRlSGVhZGluZ09uUmVzaXplIiwiaGVhZGluZyIsInRleHRDb250ZW50IiwiaW5uZXJXaWR0aCIsImlubmVySFRNTCIsImFkZERlY29yYXRpb25UZXh0IiwiZGVjb3JhdGlvbiIsInN0clR4dCIsImkiLCJsZW5ndGgiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHJhbnNmb3JtIiwib25sb2FkIiwiaGFtYnVyZ2VyIiwic2lkZWJhciIsInRvZ2dsZSIsIm5hdkxpbmtzIiwibmF2TGluayIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib2R5IiwidW5kZWZpbmVkIiwib2JzZXJ2ZXJQcm9qZWN0cyIsInRlY2hMaXN0RGVjb3IiLCJjbGFzc05hbWUiLCJFcnJvciIsImhhbmRsZUludGVyc2VjdGlvbiIsInRhcmdldCIsInNjcm9sbFNwZWVkTXVsdGlwbGllciIsImhhbmRsZUhvcml6b250YWxTY3JvbGwiLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbExlZnQiLCJkZWx0YVgiLCJlbmFibGVIb3Jpem9udGFsU2Nyb2xsIiwicGFzc2l2ZSIsImRpc2FibGVIb3Jpem9udGFsU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2l6ZSIsInNwZWVkIiwiYXJndW1lbnRzIiwicG9zaXRpb24iLCJtYXJxdWVlU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwidGV4dFNpemUiLCJkdXJhdGlvbiIsIm5ld0FuaW1hdGlvbkR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==