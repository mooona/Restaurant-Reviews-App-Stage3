/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* unused harmony export RippleCapableSurface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(4);
/* unused harmony reexport MDCRippleFoundation */
/* unused harmony reexport util */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_3__util__["d" /* supportsCssVariables */](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      containsEventTarget: (target) => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }

  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

/** @protected {!Element} */
RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}

  /** @return {boolean} */
  isUnbounded() {}

  /** @return {boolean} */
  isSurfaceActive() {}

  /** @return {boolean} */
  isSurfaceDisabled() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {!EventTarget} target */
  containsEventTarget(target) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {!Function} handler
   */
  registerResizeHandler(handler) {}

  /**
   * @param {!Function} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * @param {string} varName
   * @param {?number|string} value
   */
  updateCssVariable(varName, value) {}

  /** @return {!ClientRect} */
  computeBoundingRect() {}

  /** @return {{x: number, y: number}} */
  getWindowPageOffset() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleAdapter);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNormalizedEventCoords; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  let supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_icon_button__ = __webpack_require__(8);
/**
 * Material Design
 */



// Declare global variables.
let map;
let restaurant;
let restaurant_id;
let is_favorite = false;

// Declare the id elements.
const elementBreadcrumb = document.getElementById('breadcrumb');
const elementCardPrimary = document.getElementById('card-primary');
const elementRestaurantName = document.getElementById('restaurant-name');
const elementRestaurantAddress = document.getElementById('restaurant-address');
const elementAddToFavorites = document.getElementById('add-to-favorites');
const elementRestaurantCuisine = document.getElementById('restaurant-cuisine');
const elementRestaurantHours = document.getElementById('restaurant-hours');
const elementReviewLink = document.getElementById('review-link');
const elementMapsContainer = document.getElementById('maps-container');
const elementGoogleMaps = document.getElementById('google-maps');
const elementGoogleStaticMaps = document.getElementById('google-static-maps');
const elementReviewsContainer = document.getElementById('reviews-container');
const elementReviewsList = document.getElementById('reviews-list');

/**
 * Material Design
 */
// Enhance icon button to have a ripple effect by instantiating MDCRipple 
// on the root element.
const iconButtonRipple = 
  new __WEBPACK_IMPORTED_MODULE_0__material_ripple__["a" /* MDCRipple */](document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

const toggleFavoriteButton = 
  new __WEBPACK_IMPORTED_MODULE_1__material_icon_button__["a" /* MDCIconButtonToggle */](elementAddToFavorites);

elementAddToFavorites.addEventListener('MDCIconButtonToggle:change', function(evt) {
  // let newStatus = evt.detail.isOn ? 'yes' : 'no';
  if (evt.detail.isOn) {
    is_favorite = true;
    postIsFavoriteNetworkFirst(self.restaurant_id, is_favorite)
  } else {
    is_favorite = false;
    postIsFavoriteNetworkFirst(self.restaurant_id, is_favorite);
  }
});

/**
 * Post the is_favorite status by restaurant_id, save data locally to IndexedDB,
 * send to API server, update UI.
 * POST: http://localhost:1337/restaurants/<restaurant_id>/?is_favorite=true
 * POST: http://localhost:1337/restaurants/<restaurant_id>/?is_favorite=false
 * Parameters: "restaurant_id", "is_favorite"
 */
const postIsFavoriteNetworkFirst = (restaurant_id, is_favorite) => {
  let endpointPostIsFavorite = 
    `http://localhost:1337/restaurants/${restaurant_id}/?is_favorite=${is_favorite}`;
  // POST the is_favorite status to the API server.
  DBHelper.postRequest(endpointPostIsFavorite)
  .then(dataFromNetwork => {
    // TODO: replace alert with Push Notifications.
    // alert('Your is_favorite has been submitted successfully!');
    console.log(`[DEBUG] POST is_favorite=${is_favorite}`);
  }).catch(err => {
    console.log('[DEBUG] Network requests have failed, this is expected if offline');
    // Background sync should show a notification.
  });
}  

/**
 * Start the following when the initial HTML document has been
 * completely loaded and parsed, without waiting for stylesheets, images,
 * and subframes to finish loading.
 * Fetch neighborhoods and cuisines.
 * https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', (event) => {
  createMapsStatic();
  // Fetch restaurant by using url parameter on current page.
  self.restaurant_id = getParameterByName('id');
  loadRestaurantNetworkFirst(self.restaurant_id);
});

/**
 * Embed a Google Maps image on your web page using the Maps Static API.
 * https://developers.google.com/maps/documentation/maps-static/intro
 */
const createMapsStatic = () => {
  // Create the Maps Static API Url
  // https://developers.google.com/maps/documentation/maps-static/dev-guide
  let mapsStaticUrl 
    = `https://maps.googleapis.com/maps/api/staticmap?parameters`;
  const mapsCenter = `40.722216,-73.987501`;
  const mapsZoom = 12;
  // const mapsImageSizes = '640x640';
  let mapsImageWidth = 640;
  let mapsImageHeight = 640;
  let mapsScale = 1;
  const mapsImageFormat = 'jpg';
  // TODO: move the API Key to either environmental variables or config.js
  const mapsApiKey = `AIzaSyCfMw2lNBHbO5Y3WV374h0gT-cHgzlP2s8`;
  // const imageMapsStatic = document.createElement('img');
  const imageMapsStatic = new Image();
  imageMapsStatic.id = 'static-map';
  imageMapsStatic.className = 'google-maps-static-img';
  // Adding an event needs to be a function.
  imageMapsStatic.setAttribute('onclick', 'showGoogleMaps()');
  imageMapsStatic.alt 
    = 'Static map showing high level view of New York, Manhattan and Brooklyn';
  // Determine image sizes, free plan allows max 640x640 on scale 1 and
  // 640x640 on scale 2 returns 1280x1280 pixels.
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
  const intElemClientWidth = elementMapsContainer.clientWidth;
  if (intElemClientWidth <= 640) {
    mapsImageWidth = intElemClientWidth;
  } else {
    mapsScale = 2;
    mapsImageWidth = 640
  }
  const intElementClientHeight = elementMapsContainer.clientHeight;
  if (intElementClientHeight <= 640) {
    mapsImageHeight = intElementClientHeight;
  } else {
    mapsScale = 2;
    mapsImageHeight = 640
  }
  let mapsImageSizes = `${mapsImageWidth}x${mapsImageHeight}`;
  mapsStaticUrl = 
    `${mapsStaticUrl}&center=${mapsCenter}&zoom=${mapsZoom}&size=${mapsImageSizes}&scale=${mapsScale}&format=${mapsImageFormat}&key=${mapsApiKey}`;
  imageMapsStatic.src = mapsStaticUrl;
  imageMapsStatic.width = mapsImageWidth;
  imageMapsStatic.height = mapsImageHeight;
  elementGoogleStaticMaps.appendChild(imageMapsStatic);
}

// Show the Google Maps when the static image is clicked.
const showGoogleMaps = () => {
  if (elementGoogleMaps.style.display === 'none') {
    elementGoogleMaps.style.display = 'block';
    elementGoogleStaticMaps.style.display = 'none';
  }
}
// webpack: make sure some variables, functions are exposed to global scope.
window.showGoogleMaps = showGoogleMaps;

// Ask permission for Push Notifications.
Notification.requestPermission((status) => {
  console.log('[DEBUG] Notification permission status:', status);
});

/**
 * Fetch a restaurant by its ID from network and fallback to IndexedDB,
 * update UI.
 */
const loadRestaurantNetworkFirst = (id) => {
  const endpointRestaurantById = `http://localhost:1337/restaurants/${id}`;
  DBHelper.getServerData(endpointRestaurantById)
  .then(dataFromNetwork => {
    self.restaurant = dataFromNetwork;
    if (self.restaurant.is_favorite === 'true') {
      is_favorite = true;
      toggleFavoriteButton.on = true;
    }
    updateRestaurantUI(id);
    createBreadcrumb();
    saveRestaurantsDataLocally(dataFromNetwork)
    .then(() => {
      DBHelper.setLastUpdated(new Date());
      // DBHelper.messageDataSaved();
    }).catch(err => {
      // DBHelper.messageSaveError();
      console.warn(err);
    });
    createGoogleMaps();
  }).catch(err => {
    console.log('[DEBUG] Network requests have failed, this is expected if offline');
    getLocalRestaurantByIdData(id)
    .then(offlineData => {
      // DBHelper.messageOffline();
      self.restaurant = offlineData;
      if (self.restaurant.is_favorite === 'true') {
        is_favorite = true;
        toggleFavoriteButton.on = true;
      }
      updateRestaurantUI(id);
      createBreadcrumb();
      // createGoogleMaps();
    }).catch(err => {
      // DBHelper.messageNoData();
      console.warn(err);
    });
  });
}

/**
 * Fetch reviews from a restaurant by its ID from network and fallback to
 * IndexedDB, update UI.
 * http://localhost:1337/reviews/?restaurant_id=<restaurant_id>
 */
const loadReviewsNetworkFirst = (id) => {
  const endpointReviewsById =
    `http://localhost:1337/reviews/?restaurant_id=${id}`;
  DBHelper.getServerData(endpointReviewsById)
  .then(dataFromNetwork => {
    updateReviewsUI(dataFromNetwork);
    saveReviewsDataLocally(dataFromNetwork)
    .then(() => {
      DBHelper.setLastUpdated(new Date());
      // DBHelper.messageDataSaved();
    }).catch(err => {
      // DBHelper.messageSaveError();
      console.warn(err);
    });
  }).catch(err => {
    console.log('[DEBUG] Network requests have failed, this is expected if offline');
    getLocalReviewsByIdData(id)
    .then(offlineData => {
      // DBHelper.messageOffline();
      updateReviewsUI(offlineData);
    }).catch(err => {
      // DBHelper.messageNoData();
      console.warn(err);
    });
  });
}

const createGoogleMaps = () => {
  let loc = {lat: 40.722216, lng: -73.987501};
  // Not using scrollwheel: False anymore, using default gestureHandling: auto
  // https://developers.google.com/maps/documentation/javascript/interaction
  map = new google.maps.Map(elementGoogleMaps, {
    // center: restaurant.latlng,
    center: loc,
    zoom: 12
  });
  // DBHelper.addMarkerForRestaurant(self.restaurant, self.map);
  DBHelper.addMarkerForRestaurant(self.restaurant, map);
  // a11y - Frames must have non-empty title attribute
  // https://dequeuniversity.com/rules/axe/2.2/frame-title
  // https://developers.google.com/maps/documentation/javascript/events
  let setTitle = () => {
    const iFrameGoogleMaps = document.querySelector('#google-maps iframe');
    iFrameGoogleMaps.setAttribute('title', 'Google Maps overview of restaurants');
  }
  map.addListener('tilesloaded', setTitle);
};


/**
 * Create restaurant details, update operating hours and the review cards.
 */
const updateRestaurantUI = (id) => {
  // There is no insertAfter method. It can be emulated by combining the
  // insertBefore method with nextSibling.
  const picture = createResponsivePicture(self.restaurant);
  // A reference to card-primary is needed before we can insert the element.
  // Get a reference to the parent element.
  const parentElement = elementCardPrimary.parentNode;
  // console.log(parentElement);
  // Insert the new element into the DOM before elementCardPrimary.
  parentElement.insertBefore(picture, elementCardPrimary);

  elementRestaurantName.innerHTML = self.restaurant.name;
  elementRestaurantName.tabIndex = '0';

  elementRestaurantAddress.innerHTML = self.restaurant.address;

  elementRestaurantCuisine.innerHTML = self.restaurant.cuisine_type;

  if (self.restaurant.operating_hours) {
    updateRestaurantHoursUI();
  }

  // Add the restaurant id as url parameter.
  elementReviewLink.setAttribute('href', `review.html?id=${id}`);

  loadReviewsNetworkFirst(self.restaurant.id);
}

/**
 * Create table data with restaurant operating hours.
 */
const updateRestaurantHoursUI = () => {
  let operatingHours = self.restaurant.operating_hours;
  for (let key in operatingHours) {
    const row = document.createElement('tr');
    row.className = 'restaurant-card-table-content';
    row.tabIndex = '0';

    const day = document.createElement('td');
    day.innerHTML = key;
    row.appendChild(day);

    const time = document.createElement('td');
    time.innerHTML = operatingHours[key];
    row.appendChild(time);

    elementRestaurantHours.appendChild(row);
  }
}

/**
 * Create reviews cards.
 */
// const updateReviewsUI = (reviews = self.restaurant.reviews) => {
const updateReviewsUI = (reviews) => {
  const title = document.createElement('h3');
  title.className = 'reviews-title';
  title.innerHTML = 'Reviews';
  elementReviewsContainer.appendChild(title);

  // TODO: test with no reviews.
  if (!reviews) {
    const noReviews = document.createElement('p');
    noReviews.innerHTML = 'No reviews yet!';
    elementReviewsContainer.appendChild(noReviews);
    return;
  }

  reviews.forEach(review => {
    elementReviewsList.appendChild(createReviewHTML(review));
  });
  elementReviewsContainer.appendChild(elementReviewsList);
}

/**
 * Create a review card.
 */
const createReviewHTML = (review) => {
  const li = document.createElement('li');
  li.className = 'review-card';

  // Create a div with class card-primary that contains h2, h3.
  const divCardPrimary = document.createElement('div');
  divCardPrimary.className = 'card-primary';
  // Restaurant name.
  const name = document.createElement('h2');
  name.className = 'card-title';
  name.innerHTML = review.name;
  divCardPrimary.appendChild(name);

  // Review date.
  const date = document.createElement('h3');
  date.className = 'card-subtitle';
  // The API server returns createdAt, updatedAt in epoch format.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
  // date.innerHTML = review.date;
  const reviewDate = new Date(review.createdAt);
  date.innerHTML = reviewDate.toDateString();
  divCardPrimary.appendChild(date);
  li.appendChild(divCardPrimary);

  // Create a div with class review-card-rating.
  const divCardActions = document.createElement('div');
  divCardActions.className = 'review-card-rating';
  const rating = document.createElement('p');
  rating.className = 'review-card-rating-content';
  rating.innerHTML = `Rating: ${review.rating}`;
  divCardActions.append(rating);
  li.appendChild(divCardActions);

  // Create a div with class card-secondary that contains further content.
  const divCardSecondary = document.createElement('div');
  divCardSecondary.className = 'card-secondary';
  // Review text.
  const comments = document.createElement('p');
  comments.className = 'card-secondary-content';
  comments.innerHTML = review.comments;
  divCardSecondary.appendChild(comments);
  li.appendChild(divCardSecondary);

  return li;
}

/**
 * Add restaurant name to the breadcrumb navigation menu.
 */
const createBreadcrumb = (restaurant=self.restaurant) => {
  const li = document.createElement('li');
  li.className = 'breadcrumb';
  li.innerHTML = restaurant.name;
  // a11y - indicate current page
  // https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html -->
  li.setAttribute('aria-current', 'page');
  elementBreadcrumb.appendChild(li);
}

/**
 * Get an URL parameter by name from page URL.
 */
const getParameterByName = (name, url) => {
  if (!url)
    url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
    results = regex.exec(url);
  if (!results)
    return null;
  if (!results[2])
    return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * Create a responsive image.
 *
 * Main page
 * 0 to 479px: card has width 100%, so 1 img 100% (455 x 321).
 * 480 to 599px: card has width 100%, so 1 img fullwidth (567 x 425).
 * 600 to 839px: card has width 45%, so 2 img 45% (378 x 283).
 * 840 to 959px: card has width 45%, so 2 img 45% (432 x 324).
 * 960 to 1279px: card has width 30%, so 3 img 30% (384 x 289).
 * 1280px to x: card has width 22.5%, so 4 img 22.5% (minimum 288 x 216).
 *
 * Restaurant Info
 * 0 to 479px: card has width 100%, so 1 img 100% (479 x 359).
 * 480 to 599px: card has width 100%, so 1 img fullwidth (599 x 449).
 * 600 to 839px: card has width 50%, so 1 img 50% (419.5 x 315).
 * 840 to 959px: card has width 50%, so 1 img 50% (479.5 x 360).
 * 960 to 1279px: card has width 50%, so 1 img 50% (639.5 x 480).
 * 1280px to x: card has width 50%, so 1 img 50% (minimum 640 x 480).
 *
 * Image breakpoints have been determined using the Cloudinary generator.
 * http://www.responsivebreakpoints.com/
 * Image widths are 300, 433, 552, 653, 752, 800
 *
 * The srcset attribute gives the browser the option to choose which file
 * to use. However, the browser has no way of determining the file sizes before
 * it loads them, so it always chooses the first image in the list.
 *
 * To load the correct image size based on the viewport width we need to tell
 * the browser how big each file is before it fetches them.
 * By adding a width descriptor to each file in the srcset, we are telling
 * the browser the width of each image in pixels before it fetches the image.
 * The browser can then use these widths to decide which image to fetch based
 * on its window size. It fetches the image with the smallest width that is
 * still larger than the viewport width.
 *
 * Because the CSS is parsed after the HTML at runtime, the browser has no way
 * to know what the final display size of the image will be when it fetches it.
 * Unless we tell it otherwise, the browser assumes the images will be displayed
 * at 100% of the viewport width and fetches the images based on this.
 *
 * The sizes value matches the image's max-width value in the CSS. The browser
 * now has everything it needs to choose the correct image version. The browser
 * knows its own viewport width and the pixel density of the user's device,
 * and we have given it the source files' dimensions (using width descriptor)
 * and the image sizes relative to the viewport (the sizes attribute).
 *
 * The media query tests the viewport width of the screen, and applies the CSS.
 * We can tell the browser about the media query in the sizes attribute so that
 * it fetches the correct image when the image changes size.
 *
 * We can use the <picture> element and the <source> element, in combination
 * with media queries, to change the image source as the window is resized.
 *
 * The <picture> element lets us define multiple source files using the
 * <source> tag. This is different than simply using an <img> tag with the
 * srcset attribute because the source tag lets us add things like media queries
 * to each set of sources. Instead of giving the browser the image sizes and
 * letting it decide which files to use, we can define the images to use at
 * each window size.
 *
 * If the user's browser doesn't support the <picture> element, it fetches
 * whatever is in the <img> element. The <picture> element is just used to
 * specify multiple sources for the <img> element contained in it. The <img>
 * element is what displays the image.
 *
 * Display density descriptors are great for fixed width images, but are
 * insufficient for flexible images.
 */
const createResponsivePicture = (restaurant) => {
  const picture = document.createElement('picture');

  // sizes: the browser ignores everything after the first matching condition.
  const sizes = '(max-width: 37.4375rem) 100vw, (min-width: 37.5rem) 50vw, 100vw';

  // srcset
  const srcsetWebP =
    `${DBHelper.getImageUrlForRestaurant(restaurant, 'webp', 300)} 300w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'webp', 433)} 433w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'webp', 552)} 552w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'webp', 653)} 653w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'webp', 752)} 752w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'webp', 800)} 800w`;

  const srcsetJPEG =
    `${DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 300)} 300w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 433)} 433w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 552)} 552w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 653)} 653w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 752)} 752w,
    ${DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 800)} 800w`;

  const sourceWebP = document.createElement('source');
  sourceWebP.srcset = srcsetWebP;
  sourceWebP.sizes = sizes;
  sourceWebP.type = 'image/webp';
  picture.appendChild(sourceWebP);

  const sourceDefault = document.createElement('source');
  sourceDefault.srcset = srcsetJPEG;
  sourceDefault.sizes = sizes;
  sourceDefault.type = 'image/jpeg';
  picture.appendChild(sourceDefault);

  const defaultImg = document.createElement('img');
  // Get default image which should be width 800.
  const imageSrc = DBHelper.getImageUrlForRestaurant(restaurant, 'jpeg', 800);
  defaultImg.src = imageSrc;

  let altText = DBHelper.getAlternativeText(restaurant.id);
  if (!altText) {
    altText = `Restaurant ${restaurant.name}`;
  }
  defaultImg.alt = altText;
  // defaultImg.setAttribute('tabindex', '0');
  defaultImg.tabIndex = '0';
  picture.appendChild(defaultImg);

  return picture;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(4);
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
let PointType;

// Activation events registered on the root element of each instance for activation
const ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
const POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
let activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      containsEventTarget: (/* target: !EventTarget */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerDocumentInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterDocumentInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    this.activateHandler_ = (e) => this.activate_(e);

    /** @private {function(!Event)} */
    this.deactivateHandler_ = (e) => this.deactivate_(e);

    /** @private {function(?Event=)} */
    this.focusHandler_ = () => requestAnimationFrame(
      () => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
    );

    /** @private {function(?Event=)} */
    this.blurHandler_ = () => requestAnimationFrame(
      () => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
    );

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    this.previousActivationEvent_ = null;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  init() {
    if (!this.isSupported_()) {
      return;
    }
    this.registerRootHandlers_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
        // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
        this.layoutInternal_();
      }
    });
  }

  destroy() {
    if (!this.isSupported_()) {
      return;
    }

    if (this.activationTimer_) {
      clearTimeout(this.activationTimer_);
      this.activationTimer_ = 0;
      const {FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
      this.adapter_.removeClass(FG_ACTIVATION);
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  registerRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.registerInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }

  /**
   * @param {!Event} e
   * @private
   */
  registerDeactivationHandlers_(e) {
    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach((type) => {
        this.adapter_.registerDocumentInteractionHandler(type, this.deactivateHandler_);
      });
    }
  }

  /** @private */
  deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.deregisterInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }

  /** @private */
  deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.deregisterDocumentInteractionHandler(type, this.deactivateHandler_);
    });
  }

  /** @private */
  removeCssVars_() {
    const {strings} = MDCRippleFoundation;
    Object.keys(strings).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );

    const hasActivatedChild =
      e && activatedTargets.length > 0 && activatedTargets.some((target) => this.adapter_.containsEventTarget(target));
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push(/** @type {!EventTarget} */ (e.target));
      this.registerDeactivationHandlers_(e);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(() => {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  checkElementMadeActive_(e) {
    return (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {FG_DEACTIVATION, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    this.layoutInternal_();

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationEvent, wasActivatedByPointer} = this.activationState_;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(() => this.previousActivationEvent_ = null, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  }

  /**
   * @param {?Event} e
   * @private
   */
  deactivate_(e) {
    const activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));

    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
        this.resetActivationState_();
      });
    }
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }

  /** @param {boolean} unbounded */
  setUnbounded(unbounded) {
    const {UNBOUNDED} = MDCRippleFoundation.cssClasses;
    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};

const strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCIconButtonToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__ = __webpack_require__(1);
/* unused harmony reexport MDCIconButtonToggleFoundation */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCComponent<!MDCIconButtonToggleFoundation>}
 */
class MDCIconButtonToggle extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCIconButtonToggle(root);
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /** @return {!Element} */
  get iconEl_() {
    const {'iconInnerSelector': sel} = this.root_.dataset;
    return sel ?
      /** @type {!Element} */ (this.root_.querySelector(sel)) : this.root_;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const ripple = new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["a" /* MDCRipple */](this.root_);
    ripple.unbounded = true;
    return ripple;
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCIconButtonToggleFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.iconEl_.classList.add(className),
      removeClass: (className) => this.iconEl_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      setText: (text) => this.iconEl_.textContent = text,
      getTabIndex: () => /* number */ this.root_.tabIndex,
      setTabIndex: (tabIndex) => this.root_.tabIndex = tabIndex,
      getAttr: (name, value) => this.root_.getAttribute(name, value),
      setAttr: (name, value) => this.root_.setAttribute(name, value),
      removeAttr: (name) => this.root_.removeAttribute(name),
      notifyChange: (evtData) => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData),
    });
  }

  initialSyncWithDOM() {
    this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ARIA_PRESSED) === 'true';
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get on() {
    return this.foundation_.isOn();
  }

  /** @param {boolean} isOn */
  set on(isOn) {
    this.foundation_.toggle(isOn);
  }

  refreshToggleData() {
    this.foundation_.refreshToggleData();
  }
}




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(11);
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCIconButtonToggleAdapter>}
 */
class MDCIconButtonToggleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      setText: (/* text: string */) => {},
      getTabIndex: () => /* number */ 0,
      setTabIndex: (/* tabIndex: number */) => {},
      getAttr: (/* name: string */) => /* string */ '',
      setAttr: (/* name: string, value: string */) => {},
      removeAttr: (/* name: string */) => {},
      notifyChange: (/* evtData: IconButtonToggleEvent */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCIconButtonToggleFoundation.defaultAdapter, adapter));

    /** @private {boolean} */
    this.on_ = false;

    /** @private {boolean} */
    this.disabled_ = false;

    /** @private {number} */
    this.savedTabIndex_ = -1;

    /** @private {?IconButtonToggleState} */
    this.toggleOnData_ = null;

    /** @private {?IconButtonToggleState} */
    this.toggleOffData_ = null;

    this.clickHandler_ = /** @private {!EventListener} */ (
      () => this.toggleFromEvt_());
  }

  init() {
    this.refreshToggleData();
    this.savedTabIndex_ = this.adapter_.getTabIndex();
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
  }

  refreshToggleData() {
    this.toggleOnData_ = {
      label: this.adapter_.getAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].DATA_TOGGLE_ON_LABEL),
      content: this.adapter_.getAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].DATA_TOGGLE_ON_CONTENT),
      cssClass: this.adapter_.getAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].DATA_TOGGLE_ON_CLASS),
    };
    this.toggleOffData_ = {
      label: this.adapter_.getAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].DATA_TOGGLE_OFF_LABEL),
      content: this.adapter_.getAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].DATA_TOGGLE_OFF_CONTENT),
      cssClass: this.adapter_.getAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].DATA_TOGGLE_OFF_CLASS),
    };
  }

  /** @private */
  toggleFromEvt_() {
    this.toggle();
    const {on_: isOn} = this;
    this.adapter_.notifyChange(/** @type {!IconButtonToggleEvent} */ ({isOn}));
  }

  /** @return {boolean} */
  isOn() {
    return this.on_;
  }

  /** @param {boolean=} isOn */
  toggle(isOn = !this.on_) {
    this.on_ = isOn;

    const {ARIA_LABEL, ARIA_PRESSED} = MDCIconButtonToggleFoundation.strings;

    this.adapter_.setAttr(ARIA_PRESSED, this.on_.toString());

    const {cssClass: classToRemove} =
        this.on_ ? this.toggleOffData_ : this.toggleOnData_;

    if (classToRemove) {
      this.adapter_.removeClass(classToRemove);
    }

    const {content, label, cssClass} = this.on_ ? this.toggleOnData_ : this.toggleOffData_;

    if (cssClass) {
      this.adapter_.addClass(cssClass);
    }
    if (content) {
      this.adapter_.setText(content);
    }
    if (label) {
      this.adapter_.setAttr(ARIA_LABEL, label);
    }
  }
}

/** @record */
class IconButtonToggleState {}

/**
 * The aria-label value of the icon toggle, or undefined if there is no aria-label.
 * @export {string|undefined}
 */
IconButtonToggleState.prototype.label;

/**
 * The text for the icon toggle, or undefined if there is no text.
 * @export {string|undefined}
 */
IconButtonToggleState.prototype.content;

/**
 * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
 * @export {string|undefined}
 */
IconButtonToggleState.prototype.cssClass;

/* harmony default export */ __webpack_exports__["a"] = (MDCIconButtonToggleFoundation);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCIconButtonToggleAdapter */
/* unused harmony export IconButtonToggleEvent */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Icon Button Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */

class MDCIconButtonToggleAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /**
   * @param {string} type
   * @param {!EventListener} handler
   */
  registerInteractionHandler(type, handler) {}

  /**
   * @param {string} type
   * @param {!EventListener} handler
   */
  deregisterInteractionHandler(type, handler) {}

  /** @param {string} text */
  setText(text) {}

  /** @return {number} */
  getTabIndex() {}

  /** @param {number} tabIndex */
  setTabIndex(tabIndex) {}

  /**
   * @param {string} name
   * @return {string}
   */
  getAttr(name) {}

  /**
   * @param {string} name
   * @param {string} value
   */
  setAttr(name, value) {}

  /** @param {string} name */
  removeAttr(name) {}

  /** @param {!IconButtonToggleEvent} evtData */
  notifyChange(evtData) {}
}

/**
 * @typedef {{
 *   isOn: boolean,
 * }}
 */
let IconButtonToggleEvent;




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  ROOT: 'mdc-icon-button',
};

/** @enum {string} */
const strings = {
  DATA_TOGGLE_ON_LABEL: 'data-toggle-on-label',
  DATA_TOGGLE_ON_CONTENT: 'data-toggle-on-content',
  DATA_TOGGLE_ON_CLASS: 'data-toggle-on-class',
  DATA_TOGGLE_OFF_LABEL: 'data-toggle-off-label',
  DATA_TOGGLE_OFF_CONTENT: 'data-toggle-off-content',
  DATA_TOGGLE_OFF_CLASS: 'data-toggle-off-class',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconButtonToggle:change',
};




/***/ })
/******/ ]);