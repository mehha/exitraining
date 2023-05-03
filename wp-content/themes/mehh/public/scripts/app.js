"use strict";
(self["webpackChunksage"] = self["webpackChunksage"] || []).push([["/scripts/app"],{

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/button */ "./node_modules/bootstrap/js/dist/button.js");
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tables */ "./resources/scripts/components/tables.js");
/* harmony import */ var _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/check-scroll */ "./resources/scripts/utilities/check-scroll.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forms */ "./resources/scripts/components/forms.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/swiper */ "./resources/scripts/components/swiper.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calendar */ "./resources/scripts/components/calendar.js");
/* harmony import */ var _components_anime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/anime */ "./resources/scripts/components/anime.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search */ "./resources/scripts/components/search.js");
/* harmony import */ var _components_full_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/full-calendar */ "./resources/scripts/components/full-calendar.js");
// Bootstrap (importing BS scripts individually)
// import 'bootstrap/js/dist/carousel';


// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports










var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_2__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_3__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_4__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_6__.handleForms, _components_swiper__WEBPACK_IMPORTED_MODULE_7__.handleSwiper, _components_calendar__WEBPACK_IMPORTED_MODULE_8__.handleCalendar, _components_anime__WEBPACK_IMPORTED_MODULE_9__.handleAnimation, _components_search__WEBPACK_IMPORTED_MODULE_10__.handleSearch, _components_full_calendar__WEBPACK_IMPORTED_MODULE_11__.handleFullCalendar];

// Run fn-s
for (var _i = 0, _mountedFns = mountedFns; _i < _mountedFns.length; _i++) {
  var demountFn = _mountedFns[_i];
  typeof demountFn === 'function' && demountFn();
}

/***/ }),

/***/ "./resources/scripts/components/anime.js":
/*!***********************************************!*\
  !*** ./resources/scripts/components/anime.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleAnimation": function() { return /* binding */ handleAnimation; }
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");

function handleAnimation() {
  var el = document.querySelector('.animate .first-part');
  var elSpan = document.querySelector('.animate .second-part');
  if (!el) {
    return;
  }
  el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  elSpan.innerHTML = elSpan.textContent.replace(/\S/g, "<span class='letter-span'>$&</span>");
  animejs__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
    loop: false
  }).add({
    targets: '.animate .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function delay(el, i) {
      return 70 * i;
    }
  }).add({
    targets: '.animate .letter-span',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 450,
    delay: function delay(el, i) {
      return 70 * i;
    }
  }).add({
    targets: '.animate',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}

/***/ }),

/***/ "./resources/scripts/components/calendar.js":
/*!**************************************************!*\
  !*** ./resources/scripts/components/calendar.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCalendar": function() { return /* binding */ handleCalendar; }
/* harmony export */ });
/* harmony import */ var _uvarov_frontend_vanilla_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uvarov.frontend/vanilla-calendar */ "./node_modules/@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.js");
/* harmony import */ var _uvarov_frontend_vanilla_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uvarov_frontend_vanilla_calendar__WEBPACK_IMPORTED_MODULE_0__);

function handleCalendar() {
  var calendarEl = document.getElementById('calendar');
  if (!calendarEl) {
    return;
  }
  var handleData = function handleData(data) {
    var popupsData = {};
    data.map(function (single, index) {
      var _single$title, _single$acf, _single$acf2, _single$acf3;
      var html = '<a class="mb-2 d-inline-block" href="' + (single === null || single === void 0 ? void 0 : single.link) + '">' + (single === null || single === void 0 ? void 0 : (_single$title = single.title) === null || _single$title === void 0 ? void 0 : _single$title.rendered) + '</a>';
      if ((single === null || single === void 0 ? void 0 : (_single$acf = single.acf) === null || _single$acf === void 0 ? void 0 : _single$acf.begin_date) in popupsData) {
        var _data, _data2, _data2$title;
        html += '<a class="mb-2 d-inline-block" href="' + ((_data = data[index - 1]) === null || _data === void 0 ? void 0 : _data.link) + '">' + ((_data2 = data[index - 1]) === null || _data2 === void 0 ? void 0 : (_data2$title = _data2.title) === null || _data2$title === void 0 ? void 0 : _data2$title.rendered) + '</a>';
      }
      popupsData[single === null || single === void 0 ? void 0 : (_single$acf2 = single.acf) === null || _single$acf2 === void 0 ? void 0 : _single$acf2.begin_date] = {
        html: html,
        modifier: 'bg-green-light'
      };
      if (single !== null && single !== void 0 && (_single$acf3 = single.acf) !== null && _single$acf3 !== void 0 && _single$acf3.end_date) {
        var _single$acf4;
        popupsData[single === null || single === void 0 ? void 0 : (_single$acf4 = single.acf) === null || _single$acf4 === void 0 ? void 0 : _single$acf4.end_date] = {
          html: html,
          modifier: 'bg-green-light'
        };
      }
    });
    return popupsData;
  };
  try {
    fetch(baseUrl + '/wp-json/wp/v2/trainings').then(function (res) {
      return res.json();
    }).then(function (data) {
      handleCalendarPopups(handleData(data));
    });
  } catch (e) {
    console.log('error', e);
  }
  var handleCalendarPopups = function handleCalendarPopups(popupsData) {
    var calendarPopups = new (_uvarov_frontend_vanilla_calendar__WEBPACK_IMPORTED_MODULE_0___default())(calendarEl, {
      settings: {
        lang: 'et'
      },
      popups: popupsData
    });
    calendarPopups.init();
  };
}

/***/ }),

/***/ "./resources/scripts/components/fancybox.js":
/*!**************************************************!*\
  !*** ./resources/scripts/components/fancybox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFancybox": function() { return /* binding */ handleFancybox; }
/* harmony export */ });
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");


function handleFancybox() {
  // Single
  var singleFancyItems = ['a[href$=".jpg"]:not(.no-fancy)', 'a[href$=".jpeg"]:not(.no-fancy)', 'a[href$=".png"]:not(.no-fancy)', 'a[href$=".webp"]:not(.no-fancy)', 'a[href$=".svg"]:not(.no-fancy)', '.fancyimage', '.fancyvideo'];
  singleFancyItems.forEach(function (value) {
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind(value, {
      Toolbar: {
        display: ['close']
      }
    });
  });

  // Gallery
  var galleryFancyItems = ['.gallery-item a:not(.no-fancy)'];
  galleryFancyItems.forEach(function (value) {
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind(value, {
      groupAll: true,
      Toolbar: {
        display: ['close']
      }
    });
  });

  // Buttons
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.Plugins.Toolbar.defaults.items.close.html = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" style="enable-background:new 0 0 320 320" xml:space="preserve"><path d="M315.3 315.3c-6.3 6.3-16.4 6.3-22.6 0L160 182.6 27.3 315.3c-6.3 6.3-16.4 6.3-22.6 0-6.3-6.3-6.3-16.4 0-22.6L137.4 160 4.7 27.3c-6.3-6.3-6.3-16.4 0-22.6 6.3-6.3 16.4-6.3 22.6 0L160 137.4 292.7 4.7c6.3-6.3 16.4-6.3 22.6 0 6.3 6.3 6.3 16.4 0 22.6L182.6 160l132.7 132.7c6.3 6.2 6.3 16.4 0 22.6z" fill="#F4F1E9"/></svg>';
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Carousel.Plugins.Navigation.defaults.nextTpl = '<svg viewBox="0 0 21 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.721.881c.958-1.175 2.502-1.175 3.46 0L20.428 20.81c.763.936.763 2.446 0 3.382L4.181 44.119c-.958 1.175-2.502 1.175-3.46 0-.958-1.175-.958-3.07 0-4.245l14.155-17.386L.7 5.102c-.938-1.151-.938-3.07.02-4.22z" fill="#F4F1E9"/></svg>';
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Carousel.Plugins.Navigation.defaults.prevTpl = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 45"><path d="M20.3 44.1a2.2 2.2 0 0 1-3.5 0L.6 24.2a2.7 2.7 0 0 1 0-3.4L16.8.9a2.2 2.2 0 0 1 3.5 0 3.6 3.6 0 0 1 0 4.2L6.1 22.5l14.2 17.4a3.6 3.6 0 0 1 0 4.2z" fill="#f4f1e9"/></svg>';
}

/***/ }),

/***/ "./resources/scripts/components/forms.js":
/*!***********************************************!*\
  !*** ./resources/scripts/components/forms.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleForms": function() { return /* binding */ handleForms; }
/* harmony export */ });
function handleForms() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      // Recaptcha
      var reCaptcha;
      var FormCaptcha = document.querySelector('#g-recaptcha');
      if (event.target.classList.contains('needs-validation') && FormCaptcha) {
        // eslint-disable-next-line no-undef
        if (grecaptcha.getResponse(renderForm) === '') {
          reCaptcha = false;
          event.target.querySelector('#g-recaptcha').classList.add('captcha-error');
        } else {
          reCaptcha = true;
        }
      } else {
        reCaptcha = true;
      }
      if (!form.checkValidity() || !reCaptcha) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Recaptcha callback
  var renderForm;
  var FormCaptcha = document.querySelector('#g-recaptcha');
  window.CaptchaCallback = function () {
    if (FormCaptcha) {
      // eslint-disable-next-line no-undef
      renderForm = grecaptcha.render('g-recaptcha', {
        'sitekey': FormCaptcha.dataset.sitekey,
        'callback': correctCaptcha
      });
    }
  };
  var correctCaptcha = function correctCaptcha(response) {
    if (response !== '') FormCaptcha.classList.remove('captcha-error');
  };
}

/***/ }),

/***/ "./resources/scripts/components/full-calendar.js":
/*!*******************************************************!*\
  !*** ./resources/scripts/components/full-calendar.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFullCalendar": function() { return /* binding */ handleFullCalendar; }
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/tooltip */ "./node_modules/bootstrap/js/dist/tooltip.js");
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_core_locales_et__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core/locales/et */ "./node_modules/@fullcalendar/core/locales/et.js");




function handleFullCalendar() {
  var calendarElFull = document.getElementById('full-calendar');
  if (!calendarElFull) {
    return;
  }
  var handleData = function handleData(data) {
    var modifiedData = [];
    data.map(function (single, index) {
      modifiedData.push({
        title: single.title.rendered,
        description: single.title.rendered,
        start: single.acf.begin_date,
        end: single.acf.end_date + 'T12:00:00',
        url: single.link
      });
    });
    return modifiedData;
  };
  try {
    fetch(baseUrl + '/wp-json/wp/v2/trainings').then(function (res) {
      return res.json();
    }).then(function (data) {
      // console.log('data', data)
      handleData(data);
      initCalendar(handleData(data));
    });
  } catch (e) {
    console.log('error', e);
  }
  var initCalendar = function initCalendar(events) {
    var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(calendarElFull, {
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"]],
      initialView: 'dayGridMonth',
      events: events,
      locale: _fullcalendar_core_locales_et__WEBPACK_IMPORTED_MODULE_3__["default"],
      displayEventTime: false,
      contentHeight: 600,
      headerToolbar: {
        start: 'title',
        center: 'today prev,next',
        end: ''
      },
      eventDidMount: function eventDidMount(info) {
        var tooltip = new (bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0___default())(info.el, {
          title: info.event.extendedProps.description,
          placement: 'top',
          trigger: 'hover',
          container: 'body'
        });
      },
      viewDidMount: function viewDidMount() {
        handleMonthNav();
      }
    });
    var handleMonthNav = function handleMonthNav() {
      var fcToolbarEl = document.querySelectorAll('.fc-toolbar-chunk')[2];
      var newDivEl = document.createElement('div');
      newDivEl.className = "month-nav";
      fcToolbarEl.appendChild(newDivEl);
      var _loop = function _loop(i) {
        var monthDate = new Date(calendar.getCurrentData().currentDate.getFullYear(), calendar.getCurrentData().currentDate.getMonth() + i, 1);
        var monthNameWithYear = calendar.formatDate(monthDate, {
          month: 'long',
          year: 'numeric'
        });
        var customButton = document.createElement('button');
        customButton.textContent = monthNameWithYear;
        customButton.className = "border-0 rounded";
        customButton.addEventListener('click', function () {
          calendar.gotoDate(monthDate);
        });
        newDivEl.appendChild(customButton);
      };
      for (var i = 0; i < 12; i++) {
        _loop(i);
      }
    };
    calendar.render();
  };
}

/***/ }),

/***/ "./resources/scripts/components/menu.js":
/*!**********************************************!*\
  !*** ./resources/scripts/components/menu.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleMenu": function() { return /* binding */ handleMenu; }
/* harmony export */ });
function handleMenu() {
  // Mobile menu
  var handleMobileMenu = function handleMobileMenu() {
    var burger = document.getElementById('burger');
    var burger2 = document.getElementById('burger-2');
    var mobileMenu = document.getElementById('mobile-menu');
    if (!burger || !burger2 || !mobileMenu) {
      return;
    }
    burger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', true);
        mobileMenu.classList.remove('hidden');
      }
    });
    burger2.addEventListener('click', function () {
      if (!mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', false);
        mobileMenu.classList.add('hidden');
      }
    });
  };
  handleMobileMenu();
}

/***/ }),

/***/ "./resources/scripts/components/search.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/search.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSearch": function() { return /* binding */ handleSearch; }
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__);

function handleSearch() {
  var navbarToggler = document.getElementById('navbarPrimary');
  var searchForm = document.querySelectorAll('.toggle-search-form');
  if (!searchForm.length || !navbarToggler) {
    return;
  }
  var togglerInstance = new (bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default())(navbarToggler, {
    toggle: false
  });
  Array.from(searchForm).map(function (form) {
    var searchInstance = new (bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default())(form, {
      toggle: false
    });
    // Hide RWD menu when click search, focus on search
    form.addEventListener('show.bs.collapse', function () {
      togglerInstance.hide();
      setTimeout(function () {
        form.querySelector('.search-field').focus();
      }, 0);
    });

    // Hide search on body click
    document.addEventListener('click', function (e) {
      if (!form.contains(e.target)) {
        searchInstance.hide();
      }
    });
  });
}

/***/ }),

/***/ "./resources/scripts/components/swiper.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/swiper.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSwiper": function() { return /* binding */ handleSwiper; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

function handleSwiper() {
  var container = document.querySelector('.swiper');
  if (!container) {
    return;
  }
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 3,
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    },
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

/***/ }),

/***/ "./resources/scripts/components/tables.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/tables.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTableWidth": function() { return /* binding */ checkTableWidth; },
/* harmony export */   "handleTables": function() { return /* binding */ handleTables; }
/* harmony export */ });
function checkTableWidth(elems, childElem) {
  var outerElem = document.querySelectorAll(elems);
  Array.from(outerElem).map(function (elem) {
    var elemParent = elem.closest('.table-wrap');
    if (!elemParent) {
      var wrapper = document.createElement('div');
      wrapper.className = 'table-wrap';
      elem.parentNode.insertBefore(wrapper, elem);
      wrapper.appendChild(elem);
      elemParent = elem.closest('.table-wrap');
    }
    if (!elem.querySelector('.shadow-right')) {
      var shadowWrapper = document.createElement('span');
      shadowWrapper.className = 'shadow-right';
      elem.appendChild(shadowWrapper);
    }
    if (!elem.querySelector('.shadow-left')) {
      var _shadowWrapper = document.createElement('span');
      _shadowWrapper.className = 'shadow-left';
      elem.appendChild(_shadowWrapper);
    }
    function checkOverflow() {
      if (elem.querySelector(childElem).offsetWidth > elemParent.offsetWidth) {
        elemParent.classList.add('overflow');
        elemParent.classList.add('right-active');
      } else {
        elemParent.classList.remove('overflow');
      }
    }
    checkOverflow();
    elem.addEventListener('scroll', function () {
      if (elem.parentElement.classList.contains('table-wrap')) {
        var elemBody = elem.querySelector(childElem),
          _elemParent = elem.closest('.table-wrap');
        var scrolled = elemBody.offsetWidth - _elemParent.offsetWidth - elem.scrollLeft;
        if (scrolled < 3) {
          _elemParent.classList.add('left-active');
          _elemParent.classList.remove('right-active');
        } else if (elem.scrollLeft < 3) {
          _elemParent.classList.remove('left-active');
          _elemParent.classList.add('right-active');
        } else {
          _elemParent.classList.add('left-active');
          _elemParent.classList.add('right-active');
        }
      }
    });
  });
}
function handleTables() {
  // Init run
  var initTables = function initTables() {
    var table = document.querySelector('table');
    if (!table) {
      return;
    }
    window.onload = function () {
      table && checkTableWidth('table', 'tbody');
    };
    window.onresize = function () {
      table && checkTableWidth('table', 'tbody');
    };
  };
  initTables();
}


/***/ }),

/***/ "./resources/scripts/utilities/check-scroll.js":
/*!*****************************************************!*\
  !*** ./resources/scripts/utilities/check-scroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCheckScroll": function() { return /* binding */ handleCheckScroll; }
/* harmony export */ });
var lastScrollTop = 0;
function handleCheckScroll() {
  var body = document.body;
  var onScroll = function onScroll() {
    var scrolled = window.pageYOffset || document.scrollingElement.scrollTop;
    if (scrolled >= 60 && scrolled > lastScrollTop) {
      body.classList.add('not-top');
      body.classList.add('scrolled-down');
    } else if (scrolled >= 60) {
      body.classList.remove('scrolled-down');
    } else {
      body.classList.remove('not-top');
    }
    lastScrollTop = scrolled <= 0 ? 0 : scrolled;
  };
  document.addEventListener('scroll', onScroll);
}

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/styles/editor.scss":
/*!**************************************!*\
  !*** ./resources/styles/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["styles/app","styles/editor","/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/app.js"), __webpack_exec__("./resources/styles/app.scss"), __webpack_exec__("./resources/styles/editor.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFDeEMsQ0FBQyxNQUFNO01BQ0xpRyxJQUFJLENBQUNoSCxTQUFTLENBQUNlLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbEM7SUFDQWdHLGFBQWEsR0FBR04sUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdBLFFBQVE7RUFDOUMsQ0FBQztFQUVENUwsUUFBUSxDQUFDOEUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFc0gsUUFBUSxDQUFDO0FBQy9DOzs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2FuaW1lLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2ZhbmN5Ym94LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Z1bGwtY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NoZWNrLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgKGltcG9ydGluZyBCUyBzY3JpcHRzIGluZGl2aWR1YWxseSlcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5Jztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHtoYW5kbGVGYW5jeWJveH0gZnJvbSBcIi4vY29tcG9uZW50cy9mYW5jeWJveFwiO1xuaW1wb3J0IHtoYW5kbGVNZW51fSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xuaW1wb3J0IHtoYW5kbGVDaGVja1Njcm9sbH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NoZWNrLXNjcm9sbFwiO1xuaW1wb3J0IHtoYW5kbGVGb3Jtc30gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtc1wiO1xuaW1wb3J0IHtoYW5kbGVTd2lwZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvc3dpcGVyXCI7XG5pbXBvcnQge2hhbmRsZUNhbGVuZGFyfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhbGVuZGFyXCI7XG5pbXBvcnQge2hhbmRsZUFuaW1hdGlvbn0gZnJvbSBcIi4vY29tcG9uZW50cy9hbmltZVwiO1xuaW1wb3J0IHtoYW5kbGVTZWFyY2h9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5pbXBvcnQge2hhbmRsZUZ1bGxDYWxlbmRhcn0gZnJvbSBcIi4vY29tcG9uZW50cy9mdWxsLWNhbGVuZGFyXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICBoYW5kbGVGb3JtcyxcbiAgaGFuZGxlU3dpcGVyLFxuICBoYW5kbGVDYWxlbmRhcixcbiAgaGFuZGxlQW5pbWF0aW9uLFxuICBoYW5kbGVTZWFyY2gsXG4gIGhhbmRsZUZ1bGxDYWxlbmRhclxuXVxuXG4vLyBSdW4gZm4tc1xuZm9yIChjb25zdCBkZW1vdW50Rm4gb2YgbW91bnRlZEZucykge1xuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXG59XG4iLCJpbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFuaW1hdGlvbigpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWF0ZSAuZmlyc3QtcGFydCcpXG4gIGNvbnN0IGVsU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRlIC5zZWNvbmQtcGFydCcpXG5cbiAgaWYgKCFlbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWwuaW5uZXJIVE1MID0gZWwudGV4dENvbnRlbnQucmVwbGFjZSgvXFxTL2csIFwiPHNwYW4gY2xhc3M9J2xldHRlcic+JCY8L3NwYW4+XCIpO1xuICBlbFNwYW4uaW5uZXJIVE1MID0gZWxTcGFuLnRleHRDb250ZW50LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXItc3Bhbic+JCY8L3NwYW4+XCIpO1xuXG4gIGFuaW1lLnRpbWVsaW5lKHtsb29wOiBmYWxzZX0pXG4gICAgLmFkZCh7XG4gICAgdGFyZ2V0czogJy5hbmltYXRlIC5sZXR0ZXInLFxuICAgIHNjYWxlOiBbNCwxXSxcbiAgICBvcGFjaXR5OiBbMCwxXSxcbiAgICB0cmFuc2xhdGVaOiAwLFxuICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgIGR1cmF0aW9uOiA5NTAsXG4gICAgZGVsYXk6IChlbCwgaSkgPT4gNzAqaVxuICB9KS5hZGQoe1xuICAgIHRhcmdldHM6ICcuYW5pbWF0ZSAubGV0dGVyLXNwYW4nLFxuICAgIHNjYWxlOiBbNCwxXSxcbiAgICBvcGFjaXR5OiBbMCwxXSxcbiAgICB0cmFuc2xhdGVaOiAwLFxuICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgIGR1cmF0aW9uOiA0NTAsXG4gICAgZGVsYXk6IChlbCwgaSkgPT4gNzAqaVxuICB9KVxuICAgIC5hZGQoe1xuICAgIHRhcmdldHM6ICcuYW5pbWF0ZScsXG4gICAgb3BhY2l0eTogMSxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICBkZWxheTogMTAwMFxuICB9KTtcbn1cbiIsImltcG9ydCBWYW5pbGxhQ2FsZW5kYXIgZnJvbSAnQHV2YXJvdi5mcm9udGVuZC92YW5pbGxhLWNhbGVuZGFyJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDYWxlbmRhcigpIHtcblxuICBjb25zdCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyJylcblxuICBpZiAoIWNhbGVuZGFyRWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHBvcHVwc0RhdGEgPSB7fVxuXG4gICAgZGF0YS5tYXAoKHNpbmdsZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBodG1sID0gJzxhIGNsYXNzPVwibWItMiBkLWlubGluZS1ibG9ja1wiIGhyZWY9XCInK3NpbmdsZT8ubGluaysnXCI+JytzaW5nbGU/LnRpdGxlPy5yZW5kZXJlZCsnPC9hPidcbiAgICAgIGlmIChzaW5nbGU/LmFjZj8uYmVnaW5fZGF0ZSBpbiBwb3B1cHNEYXRhKSB7XG4gICAgICAgIGh0bWwgKz0gJzxhIGNsYXNzPVwibWItMiBkLWlubGluZS1ibG9ja1wiIGhyZWY9XCInK2RhdGFbaW5kZXgtMV0/LmxpbmsrJ1wiPicrZGF0YVtpbmRleC0xXT8udGl0bGU/LnJlbmRlcmVkKyc8L2E+J1xuICAgICAgfVxuXG4gICAgICBwb3B1cHNEYXRhW3NpbmdsZT8uYWNmPy5iZWdpbl9kYXRlXSA9IHtcbiAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgbW9kaWZpZXI6ICdiZy1ncmVlbi1saWdodCcsXG4gICAgICB9XG5cbiAgICAgIGlmIChzaW5nbGU/LmFjZj8uZW5kX2RhdGUpIHtcbiAgICAgICAgcG9wdXBzRGF0YVtzaW5nbGU/LmFjZj8uZW5kX2RhdGVdID0ge1xuICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgbW9kaWZpZXI6ICdiZy1ncmVlbi1saWdodCcsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHBvcHVwc0RhdGFcbiAgfVxuXG4gIHRyeSB7XG4gICAgZmV0Y2goYmFzZVVybCsnL3dwLWpzb24vd3AvdjIvdHJhaW5pbmdzJykudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIGhhbmRsZUNhbGVuZGFyUG9wdXBzKGhhbmRsZURhdGEoZGF0YSkpXG4gICAgfSk7XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDYWxlbmRhclBvcHVwcyA9IChwb3B1cHNEYXRhKSA9PiB7XG4gICAgY29uc3QgY2FsZW5kYXJQb3B1cHMgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICBcdHNldHRpbmdzOiB7XG4gICAgICAgIGxhbmc6ICdldCcsXG4gICAgXHR9LFxuICAgIFx0cG9wdXBzOiBwb3B1cHNEYXRhLFxuICAgIH0pO1xuICAgIGNhbGVuZGFyUG9wdXBzLmluaXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcclxuICAvLyBTaW5nbGVcclxuICBjb25zdCBzaW5nbGVGYW5jeUl0ZW1zID0gWydhW2hyZWYkPVwiLmpwZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIuanBlZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIucG5nXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIud2VicFwiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLnN2Z1wiXTpub3QoLm5vLWZhbmN5KScsICcuZmFuY3lpbWFnZScsICcuZmFuY3l2aWRlbyddO1xyXG4gIHNpbmdsZUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcclxuICAgICAgVG9vbGJhcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFtcclxuICAgICAgICAgICdjbG9zZScsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBHYWxsZXJ5XHJcbiAgY29uc3QgZ2FsbGVyeUZhbmN5SXRlbXMgPSBbJy5nYWxsZXJ5LWl0ZW0gYTpub3QoLm5vLWZhbmN5KSddO1xyXG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XHJcbiAgICAgIGdyb3VwQWxsOiB0cnVlLFxyXG4gICAgICBUb29sYmFyOiB7XHJcbiAgICAgICAgZGlzcGxheTogW1xyXG4gICAgICAgICAgJ2Nsb3NlJyxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBGYW5jeWJveC5QbHVnaW5zLlRvb2xiYXIuZGVmYXVsdHMuaXRlbXMuY2xvc2UuaHRtbCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCAzMjBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwIDMyMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHBhdGggZD1cIk0zMTUuMyAzMTUuM2MtNi4zIDYuMy0xNi40IDYuMy0yMi42IDBMMTYwIDE4Mi42IDI3LjMgMzE1LjNjLTYuMyA2LjMtMTYuNCA2LjMtMjIuNiAwLTYuMy02LjMtNi4zLTE2LjQgMC0yMi42TDEzNy40IDE2MCA0LjcgMjcuM2MtNi4zLTYuMy02LjMtMTYuNCAwLTIyLjYgNi4zLTYuMyAxNi40LTYuMyAyMi42IDBMMTYwIDEzNy40IDI5Mi43IDQuN2M2LjMtNi4zIDE2LjQtNi4zIDIyLjYgMCA2LjMgNi4zIDYuMyAxNi40IDAgMjIuNkwxODIuNiAxNjBsMTMyLjcgMTMyLjdjNi4zIDYuMiA2LjMgMTYuNCAwIDIyLjZ6XCIgZmlsbD1cIiNGNEYxRTlcIi8+PC9zdmc+JztcclxuICBDYXJvdXNlbC5QbHVnaW5zLk5hdmlnYXRpb24uZGVmYXVsdHMubmV4dFRwbCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjEgNDVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTS43MjEuODgxYy45NTgtMS4xNzUgMi41MDItMS4xNzUgMy40NiAwTDIwLjQyOCAyMC44MWMuNzYzLjkzNi43NjMgMi40NDYgMCAzLjM4Mkw0LjE4MSA0NC4xMTljLS45NTggMS4xNzUtMi41MDIgMS4xNzUtMy40NiAwLS45NTgtMS4xNzUtLjk1OC0zLjA3IDAtNC4yNDVsMTQuMTU1LTE3LjM4NkwuNyA1LjEwMmMtLjkzOC0xLjE1MS0uOTM4LTMuMDcuMDItNC4yMnpcIiBmaWxsPVwiI0Y0RjFFOVwiLz48L3N2Zz4nO1xyXG4gIENhcm91c2VsLlBsdWdpbnMuTmF2aWdhdGlvbi5kZWZhdWx0cy5wcmV2VHBsID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjEgNDVcIj48cGF0aCBkPVwiTTIwLjMgNDQuMWEyLjIgMi4yIDAgMCAxLTMuNSAwTC42IDI0LjJhMi43IDIuNyAwIDAgMSAwLTMuNEwxNi44LjlhMi4yIDIuMiAwIDAgMSAzLjUgMCAzLjYgMy42IDAgMCAxIDAgNC4yTDYuMSAyMi41bDE0LjIgMTcuNGEzLjYgMy42IDAgMCAxIDAgNC4yelwiIGZpbGw9XCIjZjRmMWU5XCIvPjwvc3ZnPic7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1zKCkge1xuICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcblxuICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cbiAgICAgIC8vIFJlY2FwdGNoYVxuICAgICAgbGV0IHJlQ2FwdGNoYTtcbiAgICAgIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWRzLXZhbGlkYXRpb24nKSAmJiBGb3JtQ2FwdGNoYSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaWYgKCBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHJlbmRlckZvcm0pID09PSAnJyApIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJykuY2xhc3NMaXN0LmFkZCgnY2FwdGNoYS1lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkgfHwgIXJlQ2FwdGNoYSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXG4gICAgfSwgZmFsc2UpXG4gIH0pXG5cbiAgLy8gUmVjYXB0Y2hhIGNhbGxiYWNrXG4gIGxldCByZW5kZXJGb3JtO1xuICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgd2luZG93LkNhcHRjaGFDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggRm9ybUNhcHRjaGEgKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJlbmRlckZvcm0gPSBncmVjYXB0Y2hhLnJlbmRlcignZy1yZWNhcHRjaGEnLCB7J3NpdGVrZXknIDogRm9ybUNhcHRjaGEuZGF0YXNldC5zaXRla2V5LCAnY2FsbGJhY2snIDogY29ycmVjdENhcHRjaGF9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGNvcnJlY3RDYXB0Y2hhID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAoIHJlc3BvbnNlICE9PSAnJylcbiAgICAgIEZvcm1DYXB0Y2hhLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcHRjaGEtZXJyb3InKTtcbiAgfTtcbn1cbiIsImltcG9ydCBUb29sdGlwIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJ1xuaW1wb3J0ICogYXMgRnVsbENhbGVuZGFyIGZyb20gXCJAZnVsbGNhbGVuZGFyL2NvcmVcIjtcbmltcG9ydCBldExvY2FsZSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9ldCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGdWxsQ2FsZW5kYXIoKSB7XG4gIGNvbnN0IGNhbGVuZGFyRWxGdWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtY2FsZW5kYXInKVxuXG4gIGlmICghY2FsZW5kYXJFbEZ1bGwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmaWVkRGF0YSA9IFtdXG5cbiAgICBkYXRhLm1hcCgoc2luZ2xlLCBpbmRleCkgPT4ge1xuICAgICAgbW9kaWZpZWREYXRhLnB1c2goe1xuICAgICAgICB0aXRsZTogc2luZ2xlLnRpdGxlLnJlbmRlcmVkLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2luZ2xlLnRpdGxlLnJlbmRlcmVkLFxuICAgICAgICBzdGFydDogc2luZ2xlLmFjZi5iZWdpbl9kYXRlLFxuICAgICAgICBlbmQ6IHNpbmdsZS5hY2YuZW5kX2RhdGUrJ1QxMjowMDowMCcsXG4gICAgICAgIHVybDogc2luZ2xlLmxpbmtcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBtb2RpZmllZERhdGFcbiAgfVxuXG4gIHRyeSB7XG4gICAgZmV0Y2goYmFzZVVybCsnL3dwLWpzb24vd3AvdjIvdHJhaW5pbmdzJykudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcbiAgICAgIGhhbmRsZURhdGEoZGF0YSlcbiAgICAgIGluaXRDYWxlbmRhcihoYW5kbGVEYXRhKGRhdGEpKVxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlKVxuICB9XG5cbiAgY29uc3QgaW5pdENhbGVuZGFyID0gKGV2ZW50cykgPT4ge1xuICAgIGxldCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbEZ1bGwsIHtcbiAgICAgIHBsdWdpbnM6IFtkYXlHcmlkUGx1Z2luXSxcbiAgICAgIGluaXRpYWxWaWV3OiAnZGF5R3JpZE1vbnRoJyxcbiAgICAgIGV2ZW50czogZXZlbnRzLFxuICAgICAgbG9jYWxlOiBldExvY2FsZSxcbiAgICAgIGRpc3BsYXlFdmVudFRpbWU6IGZhbHNlLFxuICAgICAgY29udGVudEhlaWdodDogNjAwLFxuICAgICAgaGVhZGVyVG9vbGJhcjoge1xuICAgICAgICBzdGFydDogJ3RpdGxlJyxcbiAgICAgICAgY2VudGVyOiAndG9kYXkgcHJldixuZXh0JyxcbiAgICAgICAgZW5kOiAnJ1xuICAgICAgfSxcbiAgICAgIGV2ZW50RGlkTW91bnQ6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgbGV0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcChpbmZvLmVsLCB7XG4gICAgICAgICAgdGl0bGU6IGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgY29udGFpbmVyOiAnYm9keSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdmlld0RpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhhbmRsZU1vbnRoTmF2KClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZU1vbnRoTmF2ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmNUb29sYmFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmMtdG9vbGJhci1jaHVuaycpWzJdO1xuICAgICAgY29uc3QgbmV3RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5ld0RpdkVsLmNsYXNzTmFtZSA9IFwibW9udGgtbmF2XCJcbiAgICAgIGZjVG9vbGJhckVsLmFwcGVuZENoaWxkKG5ld0RpdkVsKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgbW9udGhEYXRlID0gbmV3IERhdGUoY2FsZW5kYXIuZ2V0Q3VycmVudERhdGEoKS5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjYWxlbmRhci5nZXRDdXJyZW50RGF0YSgpLmN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyBpLCAxKVxuICAgICAgICBjb25zdCBtb250aE5hbWVXaXRoWWVhciA9IGNhbGVuZGFyLmZvcm1hdERhdGUobW9udGhEYXRlLCB7IG1vbnRoOiAnbG9uZycsIHllYXI6ICdudW1lcmljJyB9KTtcbiAgICAgICAgbGV0IGN1c3RvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjdXN0b21CdXR0b24udGV4dENvbnRlbnQgPSBtb250aE5hbWVXaXRoWWVhcjtcbiAgICAgICAgY3VzdG9tQnV0dG9uLmNsYXNzTmFtZSA9IFwiYm9yZGVyLTAgcm91bmRlZFwiO1xuICAgICAgICBjdXN0b21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxlbmRhci5nb3RvRGF0ZShtb250aERhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3RGl2RWwuYXBwZW5kQ2hpbGQoY3VzdG9tQnV0dG9uKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGVuZGFyLnJlbmRlcigpO1xuXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZW51KCkge1xyXG4gIC8vIE1vYmlsZSBtZW51XHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxyXG4gICAgY29uc3QgYnVyZ2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItMicpXHJcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51JylcclxuXHJcbiAgICBpZiAoIWJ1cmdlciB8fCAhYnVyZ2VyMiB8fCAhbW9iaWxlTWVudSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcclxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVyZ2VyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKCFtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBoYW5kbGVNb2JpbGVNZW51KClcclxufVxyXG4iLCJpbXBvcnQgQ29sbGFwc2UgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcbiAgY29uc3QgbmF2YmFyVG9nZ2xlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJQcmltYXJ5Jyk7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXNlYXJjaC1mb3JtJyk7XG5cbiAgaWYgKCFzZWFyY2hGb3JtLmxlbmd0aCB8fCAhbmF2YmFyVG9nZ2xlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdG9nZ2xlckluc3RhbmNlID0gbmV3IENvbGxhcHNlKG5hdmJhclRvZ2dsZXIsIHsgdG9nZ2xlOiBmYWxzZSB9KTtcblxuICBBcnJheS5mcm9tKHNlYXJjaEZvcm0pLm1hcChmb3JtID0+IHtcbiAgICBsZXQgc2VhcmNoSW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UoZm9ybSwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuICAgIC8vIEhpZGUgUldEIG1lbnUgd2hlbiBjbGljayBzZWFyY2gsIGZvY3VzIG9uIHNlYXJjaFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZXJJbnN0YW5jZS5oaWRlKCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZpZWxkJykuZm9jdXMoKVxuICAgICAgfSwgMClcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgc2VhcmNoIG9uIGJvZHkgY2xpY2tcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHNlYXJjaEluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge05hdmlnYXRpb24sIFN3aXBlcn0gZnJvbSBcInN3aXBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3dpcGVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJylcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihjb250YWluZXIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDU3NnB4XG4gICAgICA1NzY6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMlxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcclxuICBjb25zdCBvdXRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcclxuICBBcnJheS5mcm9tKG91dGVyRWxlbSkubWFwKGVsZW0gPT4ge1xyXG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICBpZiAoIWVsZW1QYXJlbnQpIHtcclxuICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XHJcbiAgICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbSk7XHJcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LXJpZ2h0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1sZWZ0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xyXG4gICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSkub2Zmc2V0V2lkdGggPiBlbGVtUGFyZW50Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja092ZXJmbG93KCk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZS13cmFwJykpIHtcclxuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcclxuICAgICAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gKGVsZW1Cb2R5Lm9mZnNldFdpZHRoIC0gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCAtIGVsZW0uc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xyXG4gIC8vIEluaXQgcnVuXHJcbiAgY29uc3QgaW5pdFRhYmxlcyA9ICgpID0+IHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcblxyXG4gICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBpbml0VGFibGVzKClcclxufVxyXG5cclxuZXhwb3J0IHsgY2hlY2tUYWJsZVdpZHRoLCBoYW5kbGVUYWJsZXMgfVxyXG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tTY3JvbGwoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPj0gNjAgJiYgc2Nyb2xsZWQgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm90LXRvcCcpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPj0gNjApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC10b3AnKTtcclxuICAgIH1cclxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImhhbmRsZUZhbmN5Ym94IiwiaGFuZGxlTWVudSIsImhhbmRsZVRhYmxlcyIsImhhbmRsZUNoZWNrU2Nyb2xsIiwiaGFuZGxlRm9ybXMiLCJoYW5kbGVTd2lwZXIiLCJoYW5kbGVDYWxlbmRhciIsImhhbmRsZUFuaW1hdGlvbiIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUZ1bGxDYWxlbmRhciIsIm1vdW50ZWRGbnMiLCJkZW1vdW50Rm4iLCJhbmltZSIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxTcGFuIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwidGltZWxpbmUiLCJsb29wIiwiYWRkIiwidGFyZ2V0cyIsInNjYWxlIiwib3BhY2l0eSIsInRyYW5zbGF0ZVoiLCJlYXNpbmciLCJkdXJhdGlvbiIsImRlbGF5IiwiaSIsIlZhbmlsbGFDYWxlbmRhciIsImNhbGVuZGFyRWwiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZURhdGEiLCJkYXRhIiwicG9wdXBzRGF0YSIsIm1hcCIsInNpbmdsZSIsImluZGV4IiwiaHRtbCIsImxpbmsiLCJ0aXRsZSIsIl9zaW5nbGUkdGl0bGUiLCJyZW5kZXJlZCIsImFjZiIsIl9zaW5nbGUkYWNmIiwiYmVnaW5fZGF0ZSIsIl9kYXRhIiwiX2RhdGEyIiwiX2RhdGEyJHRpdGxlIiwiX3NpbmdsZSRhY2YyIiwibW9kaWZpZXIiLCJfc2luZ2xlJGFjZjMiLCJlbmRfZGF0ZSIsIl9zaW5nbGUkYWNmNCIsImZldGNoIiwiYmFzZVVybCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFuZGxlQ2FsZW5kYXJQb3B1cHMiLCJlIiwiY29uc29sZSIsImxvZyIsImNhbGVuZGFyUG9wdXBzIiwic2V0dGluZ3MiLCJsYW5nIiwicG9wdXBzIiwiaW5pdCIsIkZhbmN5Ym94IiwiQ2Fyb3VzZWwiLCJzaW5nbGVGYW5jeUl0ZW1zIiwiZm9yRWFjaCIsInZhbHVlIiwiYmluZCIsIlRvb2xiYXIiLCJkaXNwbGF5IiwiZ2FsbGVyeUZhbmN5SXRlbXMiLCJncm91cEFsbCIsIlBsdWdpbnMiLCJkZWZhdWx0cyIsIml0ZW1zIiwiY2xvc2UiLCJOYXZpZ2F0aW9uIiwibmV4dFRwbCIsInByZXZUcGwiLCJmb3JtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlQ2FwdGNoYSIsIkZvcm1DYXB0Y2hhIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsInJlbmRlckZvcm0iLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJDYXB0Y2hhQ2FsbGJhY2siLCJyZW5kZXIiLCJkYXRhc2V0Iiwic2l0ZWtleSIsImNvcnJlY3RDYXB0Y2hhIiwicmVzcG9uc2UiLCJyZW1vdmUiLCJUb29sdGlwIiwiZGF5R3JpZFBsdWdpbiIsIkZ1bGxDYWxlbmRhciIsImV0TG9jYWxlIiwiY2FsZW5kYXJFbEZ1bGwiLCJtb2RpZmllZERhdGEiLCJwdXNoIiwiZGVzY3JpcHRpb24iLCJzdGFydCIsImVuZCIsInVybCIsImluaXRDYWxlbmRhciIsImV2ZW50cyIsImNhbGVuZGFyIiwiQ2FsZW5kYXIiLCJwbHVnaW5zIiwiaW5pdGlhbFZpZXciLCJsb2NhbGUiLCJkaXNwbGF5RXZlbnRUaW1lIiwiY29udGVudEhlaWdodCIsImhlYWRlclRvb2xiYXIiLCJjZW50ZXIiLCJldmVudERpZE1vdW50IiwiaW5mbyIsInRvb2x0aXAiLCJleHRlbmRlZFByb3BzIiwicGxhY2VtZW50IiwidHJpZ2dlciIsImNvbnRhaW5lciIsInZpZXdEaWRNb3VudCIsImhhbmRsZU1vbnRoTmF2IiwiZmNUb29sYmFyRWwiLCJuZXdEaXZFbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsIm1vbnRoRGF0ZSIsIkRhdGUiLCJnZXRDdXJyZW50RGF0YSIsImN1cnJlbnREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsIm1vbnRoTmFtZVdpdGhZZWFyIiwiZm9ybWF0RGF0ZSIsIm1vbnRoIiwieWVhciIsImN1c3RvbUJ1dHRvbiIsImdvdG9EYXRlIiwiX2xvb3AiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiYnVyZ2VyMiIsIm1vYmlsZU1lbnUiLCJzZXRBdHRyaWJ1dGUiLCJDb2xsYXBzZSIsIm5hdmJhclRvZ2dsZXIiLCJzZWFyY2hGb3JtIiwibGVuZ3RoIiwidG9nZ2xlckluc3RhbmNlIiwidG9nZ2xlIiwic2VhcmNoSW5zdGFuY2UiLCJoaWRlIiwic2V0VGltZW91dCIsImZvY3VzIiwiU3dpcGVyIiwic3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1Blckdyb3VwIiwiYnJlYWtwb2ludHMiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNoZWNrVGFibGVXaWR0aCIsImVsZW1zIiwiY2hpbGRFbGVtIiwib3V0ZXJFbGVtIiwiZWxlbVBhcmVudCIsImVsZW0iLCJjbG9zZXN0Iiwid3JhcHBlciIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJzaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwicGFyZW50RWxlbWVudCIsImVsZW1Cb2R5Iiwic2Nyb2xsZWQiLCJzY3JvbGxMZWZ0IiwiaW5pdFRhYmxlcyIsInRhYmxlIiwib25sb2FkIiwib25yZXNpemUiLCJsYXN0U2Nyb2xsVG9wIiwiYm9keSIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==