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
  var el = document.querySelector('.animate strong');
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
        end: single.acf.end_date,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9HLFNBQVMsQ0FBQ2UsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBK0YsYUFBYSxHQUFHTixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0EsUUFBUTtFQUM5QyxDQUFDO0VBRUQzTCxRQUFRLENBQUM4RSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVxSCxRQUFRLENBQUM7QUFDL0M7Ozs7Ozs7Ozs7O0FDbkJBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZnVsbC1jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvdGFibGVzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY2hlY2stc2Nyb2xsLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2VkaXRvci5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90YWInO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQge2hhbmRsZUZhbmN5Ym94fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZhbmN5Ym94XCI7XG5pbXBvcnQge2hhbmRsZU1lbnV9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IHtoYW5kbGVUYWJsZXN9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGVzXCI7XG5pbXBvcnQge2hhbmRsZUNoZWNrU2Nyb2xsfSBmcm9tIFwiLi91dGlsaXRpZXMvY2hlY2stc2Nyb2xsXCI7XG5pbXBvcnQge2hhbmRsZUZvcm1zfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1zXCI7XG5pbXBvcnQge2hhbmRsZVN3aXBlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9zd2lwZXJcIjtcbmltcG9ydCB7aGFuZGxlQ2FsZW5kYXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FsZW5kYXJcIjtcbmltcG9ydCB7aGFuZGxlQW5pbWF0aW9ufSBmcm9tIFwiLi9jb21wb25lbnRzL2FuaW1lXCI7XG5pbXBvcnQge2hhbmRsZVNlYXJjaH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcbmltcG9ydCB7aGFuZGxlRnVsbENhbGVuZGFyfSBmcm9tIFwiLi9jb21wb25lbnRzL2Z1bGwtY2FsZW5kYXJcIjtcblxuY29uc3QgbW91bnRlZEZucyA9IFtcbiAgaGFuZGxlRmFuY3lib3gsXG4gIGhhbmRsZU1lbnUsXG4gIGhhbmRsZVRhYmxlcyxcbiAgaGFuZGxlQ2hlY2tTY3JvbGwsXG4gIGhhbmRsZUZvcm1zLFxuICBoYW5kbGVTd2lwZXIsXG4gIGhhbmRsZUNhbGVuZGFyLFxuICBoYW5kbGVBbmltYXRpb24sXG4gIGhhbmRsZVNlYXJjaCxcbiAgaGFuZGxlRnVsbENhbGVuZGFyXG5dXG5cbi8vIFJ1biBmbi1zXG5mb3IgKGNvbnN0IGRlbW91bnRGbiBvZiBtb3VudGVkRm5zKSB7XG4gIHR5cGVvZiBkZW1vdW50Rm4gPT09ICdmdW5jdGlvbicgJiYgZGVtb3VudEZuKClcbn1cbiIsImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQW5pbWF0aW9uKCkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRlIHN0cm9uZycpXG4gIGNvbnN0IGVsU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRlIC5zZWNvbmQtcGFydCcpXG5cbiAgaWYgKCFlbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWwuaW5uZXJIVE1MID0gZWwudGV4dENvbnRlbnQucmVwbGFjZSgvXFxTL2csIFwiPHNwYW4gY2xhc3M9J2xldHRlcic+JCY8L3NwYW4+XCIpO1xuICBlbFNwYW4uaW5uZXJIVE1MID0gZWxTcGFuLnRleHRDb250ZW50LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXItc3Bhbic+JCY8L3NwYW4+XCIpO1xuXG4gIGFuaW1lLnRpbWVsaW5lKHtsb29wOiBmYWxzZX0pXG4gICAgLmFkZCh7XG4gICAgdGFyZ2V0czogJy5hbmltYXRlIC5sZXR0ZXInLFxuICAgIHNjYWxlOiBbNCwxXSxcbiAgICBvcGFjaXR5OiBbMCwxXSxcbiAgICB0cmFuc2xhdGVaOiAwLFxuICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgIGR1cmF0aW9uOiA5NTAsXG4gICAgZGVsYXk6IChlbCwgaSkgPT4gNzAqaVxuICB9KS5hZGQoe1xuICAgIHRhcmdldHM6ICcuYW5pbWF0ZSAubGV0dGVyLXNwYW4nLFxuICAgIHNjYWxlOiBbNCwxXSxcbiAgICBvcGFjaXR5OiBbMCwxXSxcbiAgICB0cmFuc2xhdGVaOiAwLFxuICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgIGR1cmF0aW9uOiA0NTAsXG4gICAgZGVsYXk6IChlbCwgaSkgPT4gNzAqaVxuICB9KVxuICAgIC5hZGQoe1xuICAgIHRhcmdldHM6ICcuYW5pbWF0ZScsXG4gICAgb3BhY2l0eTogMSxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICBkZWxheTogMTAwMFxuICB9KTtcbn1cbiIsImltcG9ydCBWYW5pbGxhQ2FsZW5kYXIgZnJvbSAnQHV2YXJvdi5mcm9udGVuZC92YW5pbGxhLWNhbGVuZGFyJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDYWxlbmRhcigpIHtcblxuICBjb25zdCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyJylcblxuICBpZiAoIWNhbGVuZGFyRWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHBvcHVwc0RhdGEgPSB7fVxuXG4gICAgZGF0YS5tYXAoKHNpbmdsZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBodG1sID0gJzxhIGNsYXNzPVwibWItMiBkLWlubGluZS1ibG9ja1wiIGhyZWY9XCInK3NpbmdsZT8ubGluaysnXCI+JytzaW5nbGU/LnRpdGxlPy5yZW5kZXJlZCsnPC9hPidcbiAgICAgIGlmIChzaW5nbGU/LmFjZj8uYmVnaW5fZGF0ZSBpbiBwb3B1cHNEYXRhKSB7XG4gICAgICAgIGh0bWwgKz0gJzxhIGNsYXNzPVwibWItMiBkLWlubGluZS1ibG9ja1wiIGhyZWY9XCInK2RhdGFbaW5kZXgtMV0/LmxpbmsrJ1wiPicrZGF0YVtpbmRleC0xXT8udGl0bGU/LnJlbmRlcmVkKyc8L2E+J1xuICAgICAgfVxuXG4gICAgICBwb3B1cHNEYXRhW3NpbmdsZT8uYWNmPy5iZWdpbl9kYXRlXSA9IHtcbiAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgbW9kaWZpZXI6ICdiZy1ncmVlbi1saWdodCcsXG4gICAgICB9XG5cbiAgICAgIGlmIChzaW5nbGU/LmFjZj8uZW5kX2RhdGUpIHtcbiAgICAgICAgcG9wdXBzRGF0YVtzaW5nbGU/LmFjZj8uZW5kX2RhdGVdID0ge1xuICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgbW9kaWZpZXI6ICdiZy1ncmVlbi1saWdodCcsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHBvcHVwc0RhdGFcbiAgfVxuXG4gIHRyeSB7XG4gICAgZmV0Y2goYmFzZVVybCsnL3dwLWpzb24vd3AvdjIvdHJhaW5pbmdzJykudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIGhhbmRsZUNhbGVuZGFyUG9wdXBzKGhhbmRsZURhdGEoZGF0YSkpXG4gICAgfSk7XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDYWxlbmRhclBvcHVwcyA9IChwb3B1cHNEYXRhKSA9PiB7XG4gICAgY29uc3QgY2FsZW5kYXJQb3B1cHMgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICBcdHNldHRpbmdzOiB7XG4gICAgICAgIGxhbmc6ICdldCcsXG4gICAgXHR9LFxuICAgIFx0cG9wdXBzOiBwb3B1cHNEYXRhLFxuICAgIH0pO1xuICAgIGNhbGVuZGFyUG9wdXBzLmluaXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcclxuICAvLyBTaW5nbGVcclxuICBjb25zdCBzaW5nbGVGYW5jeUl0ZW1zID0gWydhW2hyZWYkPVwiLmpwZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIuanBlZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIucG5nXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIud2VicFwiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLnN2Z1wiXTpub3QoLm5vLWZhbmN5KScsICcuZmFuY3lpbWFnZScsICcuZmFuY3l2aWRlbyddO1xyXG4gIHNpbmdsZUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcclxuICAgICAgVG9vbGJhcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFtcclxuICAgICAgICAgICdjbG9zZScsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBHYWxsZXJ5XHJcbiAgY29uc3QgZ2FsbGVyeUZhbmN5SXRlbXMgPSBbJy5nYWxsZXJ5LWl0ZW0gYTpub3QoLm5vLWZhbmN5KSddO1xyXG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XHJcbiAgICAgIGdyb3VwQWxsOiB0cnVlLFxyXG4gICAgICBUb29sYmFyOiB7XHJcbiAgICAgICAgZGlzcGxheTogW1xyXG4gICAgICAgICAgJ2Nsb3NlJyxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBGYW5jeWJveC5QbHVnaW5zLlRvb2xiYXIuZGVmYXVsdHMuaXRlbXMuY2xvc2UuaHRtbCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCAzMjBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwIDMyMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHBhdGggZD1cIk0zMTUuMyAzMTUuM2MtNi4zIDYuMy0xNi40IDYuMy0yMi42IDBMMTYwIDE4Mi42IDI3LjMgMzE1LjNjLTYuMyA2LjMtMTYuNCA2LjMtMjIuNiAwLTYuMy02LjMtNi4zLTE2LjQgMC0yMi42TDEzNy40IDE2MCA0LjcgMjcuM2MtNi4zLTYuMy02LjMtMTYuNCAwLTIyLjYgNi4zLTYuMyAxNi40LTYuMyAyMi42IDBMMTYwIDEzNy40IDI5Mi43IDQuN2M2LjMtNi4zIDE2LjQtNi4zIDIyLjYgMCA2LjMgNi4zIDYuMyAxNi40IDAgMjIuNkwxODIuNiAxNjBsMTMyLjcgMTMyLjdjNi4zIDYuMiA2LjMgMTYuNCAwIDIyLjZ6XCIgZmlsbD1cIiNGNEYxRTlcIi8+PC9zdmc+JztcclxuICBDYXJvdXNlbC5QbHVnaW5zLk5hdmlnYXRpb24uZGVmYXVsdHMubmV4dFRwbCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjEgNDVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTS43MjEuODgxYy45NTgtMS4xNzUgMi41MDItMS4xNzUgMy40NiAwTDIwLjQyOCAyMC44MWMuNzYzLjkzNi43NjMgMi40NDYgMCAzLjM4Mkw0LjE4MSA0NC4xMTljLS45NTggMS4xNzUtMi41MDIgMS4xNzUtMy40NiAwLS45NTgtMS4xNzUtLjk1OC0zLjA3IDAtNC4yNDVsMTQuMTU1LTE3LjM4NkwuNyA1LjEwMmMtLjkzOC0xLjE1MS0uOTM4LTMuMDcuMDItNC4yMnpcIiBmaWxsPVwiI0Y0RjFFOVwiLz48L3N2Zz4nO1xyXG4gIENhcm91c2VsLlBsdWdpbnMuTmF2aWdhdGlvbi5kZWZhdWx0cy5wcmV2VHBsID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjEgNDVcIj48cGF0aCBkPVwiTTIwLjMgNDQuMWEyLjIgMi4yIDAgMCAxLTMuNSAwTC42IDI0LjJhMi43IDIuNyAwIDAgMSAwLTMuNEwxNi44LjlhMi4yIDIuMiAwIDAgMSAzLjUgMCAzLjYgMy42IDAgMCAxIDAgNC4yTDYuMSAyMi41bDE0LjIgMTcuNGEzLjYgMy42IDAgMCAxIDAgNC4yelwiIGZpbGw9XCIjZjRmMWU5XCIvPjwvc3ZnPic7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1zKCkge1xuICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcblxuICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cbiAgICAgIC8vIFJlY2FwdGNoYVxuICAgICAgbGV0IHJlQ2FwdGNoYTtcbiAgICAgIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWRzLXZhbGlkYXRpb24nKSAmJiBGb3JtQ2FwdGNoYSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaWYgKCBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHJlbmRlckZvcm0pID09PSAnJyApIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJykuY2xhc3NMaXN0LmFkZCgnY2FwdGNoYS1lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkgfHwgIXJlQ2FwdGNoYSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXG4gICAgfSwgZmFsc2UpXG4gIH0pXG5cbiAgLy8gUmVjYXB0Y2hhIGNhbGxiYWNrXG4gIGxldCByZW5kZXJGb3JtO1xuICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgd2luZG93LkNhcHRjaGFDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggRm9ybUNhcHRjaGEgKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJlbmRlckZvcm0gPSBncmVjYXB0Y2hhLnJlbmRlcignZy1yZWNhcHRjaGEnLCB7J3NpdGVrZXknIDogRm9ybUNhcHRjaGEuZGF0YXNldC5zaXRla2V5LCAnY2FsbGJhY2snIDogY29ycmVjdENhcHRjaGF9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGNvcnJlY3RDYXB0Y2hhID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAoIHJlc3BvbnNlICE9PSAnJylcbiAgICAgIEZvcm1DYXB0Y2hhLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcHRjaGEtZXJyb3InKTtcbiAgfTtcbn1cbiIsImltcG9ydCBUb29sdGlwIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJ1xuaW1wb3J0ICogYXMgRnVsbENhbGVuZGFyIGZyb20gXCJAZnVsbGNhbGVuZGFyL2NvcmVcIjtcbmltcG9ydCBldExvY2FsZSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9ldCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGdWxsQ2FsZW5kYXIoKSB7XG4gIGNvbnN0IGNhbGVuZGFyRWxGdWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtY2FsZW5kYXInKVxuXG4gIGlmICghY2FsZW5kYXJFbEZ1bGwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmaWVkRGF0YSA9IFtdXG5cbiAgICBkYXRhLm1hcCgoc2luZ2xlLCBpbmRleCkgPT4ge1xuICAgICAgbW9kaWZpZWREYXRhLnB1c2goe1xuICAgICAgICB0aXRsZTogc2luZ2xlLnRpdGxlLnJlbmRlcmVkLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2luZ2xlLnRpdGxlLnJlbmRlcmVkLFxuICAgICAgICBzdGFydDogc2luZ2xlLmFjZi5iZWdpbl9kYXRlLFxuICAgICAgICBlbmQ6IHNpbmdsZS5hY2YuZW5kX2RhdGUsXG4gICAgICAgIHVybDogc2luZ2xlLmxpbmtcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBtb2RpZmllZERhdGFcbiAgfVxuXG4gIHRyeSB7XG4gICAgZmV0Y2goYmFzZVVybCsnL3dwLWpzb24vd3AvdjIvdHJhaW5pbmdzJykudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcbiAgICAgIGhhbmRsZURhdGEoZGF0YSlcbiAgICAgIGluaXRDYWxlbmRhcihoYW5kbGVEYXRhKGRhdGEpKVxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlKVxuICB9XG5cbiAgY29uc3QgaW5pdENhbGVuZGFyID0gKGV2ZW50cykgPT4ge1xuICAgIGxldCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbEZ1bGwsIHtcbiAgICAgIHBsdWdpbnM6IFtkYXlHcmlkUGx1Z2luXSxcbiAgICAgIGluaXRpYWxWaWV3OiAnZGF5R3JpZE1vbnRoJyxcbiAgICAgIGV2ZW50czogZXZlbnRzLFxuICAgICAgbG9jYWxlOiBldExvY2FsZSxcbiAgICAgIGNvbnRlbnRIZWlnaHQ6IDYwMCxcbiAgICAgIGhlYWRlclRvb2xiYXI6IHtcbiAgICAgICAgc3RhcnQ6ICd0aXRsZScsXG4gICAgICAgIGNlbnRlcjogJ3RvZGF5IHByZXYsbmV4dCcsXG4gICAgICAgIGVuZDogJydcbiAgICAgIH0sXG4gICAgICBldmVudERpZE1vdW50OiBmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgIGxldCB0b29sdGlwID0gbmV3IFRvb2x0aXAoaW5mby5lbCwge1xuICAgICAgICAgIHRpdGxlOiBpbmZvLmV2ZW50LmV4dGVuZGVkUHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHZpZXdEaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBoYW5kbGVNb250aE5hdigpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb250aE5hdiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZjVG9vbGJhckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZjLXRvb2xiYXItY2h1bmsnKVsyXTtcbiAgICAgIGNvbnN0IG5ld0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdEaXZFbC5jbGFzc05hbWUgPSBcIm1vbnRoLW5hdlwiXG4gICAgICBmY1Rvb2xiYXJFbC5hcHBlbmRDaGlsZChuZXdEaXZFbClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKGNhbGVuZGFyLmdldEN1cnJlbnREYXRhKCkuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY2FsZW5kYXIuZ2V0Q3VycmVudERhdGEoKS5jdXJyZW50RGF0ZS5nZXRNb250aCgpICsgaSwgMSlcbiAgICAgICAgY29uc3QgbW9udGhOYW1lV2l0aFllYXIgPSBjYWxlbmRhci5mb3JtYXREYXRlKG1vbnRoRGF0ZSwgeyBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycgfSk7XG4gICAgICAgIGxldCBjdXN0b21CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY3VzdG9tQnV0dG9uLnRleHRDb250ZW50ID0gbW9udGhOYW1lV2l0aFllYXI7XG4gICAgICAgIGN1c3RvbUJ1dHRvbi5jbGFzc05hbWUgPSBcImJvcmRlci0wIHJvdW5kZWRcIjtcbiAgICAgICAgY3VzdG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsZW5kYXIuZ290b0RhdGUobW9udGhEYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0RpdkVsLmFwcGVuZENoaWxkKGN1c3RvbUJ1dHRvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxlbmRhci5yZW5kZXIoKTtcblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcclxuICAvLyBNb2JpbGUgbWVudVxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcclxuICAgIGNvbnN0IGJ1cmdlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLTInKVxyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpXHJcblxyXG4gICAgaWYgKCFidXJnZXIgfHwgIWJ1cmdlcjIgfHwgIW1vYmlsZU1lbnUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXHJcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1cmdlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICghbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgaGFuZGxlTW9iaWxlTWVudSgpXHJcbn1cclxuIiwiaW1wb3J0IENvbGxhcHNlIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyUHJpbWFyeScpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zZWFyY2gtZm9ybScpO1xuXG4gIGlmICghc2VhcmNoRm9ybS5sZW5ndGggfHwgIW5hdmJhclRvZ2dsZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZXJJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShuYXZiYXJUb2dnbGVyLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG5cbiAgQXJyYXkuZnJvbShzZWFyY2hGb3JtKS5tYXAoZm9ybSA9PiB7XG4gICAgbGV0IHNlYXJjaEluc3RhbmNlID0gbmV3IENvbGxhcHNlKGZvcm0sIHsgdG9nZ2xlOiBmYWxzZSB9KTtcbiAgICAvLyBIaWRlIFJXRCBtZW51IHdoZW4gY2xpY2sgc2VhcmNoLCBmb2N1cyBvbiBzZWFyY2hcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVySW5zdGFuY2UuaGlkZSgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZCcpLmZvY3VzKClcbiAgICAgIH0sIDApXG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHNlYXJjaCBvbiBib2R5IGNsaWNrXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBzZWFyY2hJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtOYXZpZ2F0aW9uLCBTd2lwZXJ9IGZyb20gXCJzd2lwZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN3aXBlcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpXG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA1NzZweFxuICAgICAgNTc2OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICB9LFxuICAgICAgNzY4OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcblxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICB9KTtcbn1cbiIsImZ1bmN0aW9uIGNoZWNrVGFibGVXaWR0aChlbGVtcywgY2hpbGRFbGVtKSB7XHJcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgQXJyYXkuZnJvbShvdXRlckVsZW0pLm1hcChlbGVtID0+IHtcclxuICAgIGxldCBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XHJcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXdyYXAnO1xyXG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LXJpZ2h0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1yaWdodCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctbGVmdCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctbGVmdCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcclxuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tPdmVyZmxvdygpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGFibGUtd3JhcCcpKSB7XHJcbiAgICAgICAgbGV0IGVsZW1Cb2R5ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSksXHJcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgICAgIGxldCBzY3JvbGxlZCA9IChlbGVtQm9keS5vZmZzZXRXaWR0aCAtIGVsZW1QYXJlbnQub2Zmc2V0V2lkdGggLSBlbGVtLnNjcm9sbExlZnQpO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLnNjcm9sbExlZnQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhYmxlcygpIHtcclxuICAvLyBJbml0IHJ1blxyXG4gIGNvbnN0IGluaXRUYWJsZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgIGlmICghdGFibGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgaW5pdFRhYmxlcygpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrVGFibGVXaWR0aCwgaGFuZGxlVGFibGVzIH1cclxuIiwibGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrU2Nyb2xsKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vdC10b3AnKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XHJcbiAgICB9XHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsZWQgPD0gMCA/IDAgOiBzY3JvbGxlZDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJoYW5kbGVGYW5jeWJveCIsImhhbmRsZU1lbnUiLCJoYW5kbGVUYWJsZXMiLCJoYW5kbGVDaGVja1Njcm9sbCIsImhhbmRsZUZvcm1zIiwiaGFuZGxlU3dpcGVyIiwiaGFuZGxlQ2FsZW5kYXIiLCJoYW5kbGVBbmltYXRpb24iLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVGdWxsQ2FsZW5kYXIiLCJtb3VudGVkRm5zIiwiZGVtb3VudEZuIiwiYW5pbWUiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsU3BhbiIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInRpbWVsaW5lIiwibG9vcCIsImFkZCIsInRhcmdldHMiLCJzY2FsZSIsIm9wYWNpdHkiLCJ0cmFuc2xhdGVaIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkZWxheSIsImkiLCJWYW5pbGxhQ2FsZW5kYXIiLCJjYWxlbmRhckVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVEYXRhIiwiZGF0YSIsInBvcHVwc0RhdGEiLCJtYXAiLCJzaW5nbGUiLCJpbmRleCIsImh0bWwiLCJsaW5rIiwidGl0bGUiLCJfc2luZ2xlJHRpdGxlIiwicmVuZGVyZWQiLCJhY2YiLCJfc2luZ2xlJGFjZiIsImJlZ2luX2RhdGUiLCJfZGF0YSIsIl9kYXRhMiIsIl9kYXRhMiR0aXRsZSIsIl9zaW5nbGUkYWNmMiIsIm1vZGlmaWVyIiwiX3NpbmdsZSRhY2YzIiwiZW5kX2RhdGUiLCJfc2luZ2xlJGFjZjQiLCJmZXRjaCIsImJhc2VVcmwiLCJ0aGVuIiwicmVzIiwianNvbiIsImhhbmRsZUNhbGVuZGFyUG9wdXBzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjYWxlbmRhclBvcHVwcyIsInNldHRpbmdzIiwibGFuZyIsInBvcHVwcyIsImluaXQiLCJGYW5jeWJveCIsIkNhcm91c2VsIiwic2luZ2xlRmFuY3lJdGVtcyIsImZvckVhY2giLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwiZGlzcGxheSIsImdhbGxlcnlGYW5jeUl0ZW1zIiwiZ3JvdXBBbGwiLCJQbHVnaW5zIiwiZGVmYXVsdHMiLCJpdGVtcyIsImNsb3NlIiwiTmF2aWdhdGlvbiIsIm5leHRUcGwiLCJwcmV2VHBsIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJyZW5kZXJGb3JtIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiQ2FwdGNoYUNhbGxiYWNrIiwicmVuZGVyIiwiZGF0YXNldCIsInNpdGVrZXkiLCJjb3JyZWN0Q2FwdGNoYSIsInJlc3BvbnNlIiwicmVtb3ZlIiwiVG9vbHRpcCIsImRheUdyaWRQbHVnaW4iLCJGdWxsQ2FsZW5kYXIiLCJldExvY2FsZSIsImNhbGVuZGFyRWxGdWxsIiwibW9kaWZpZWREYXRhIiwicHVzaCIsImRlc2NyaXB0aW9uIiwic3RhcnQiLCJlbmQiLCJ1cmwiLCJpbml0Q2FsZW5kYXIiLCJldmVudHMiLCJjYWxlbmRhciIsIkNhbGVuZGFyIiwicGx1Z2lucyIsImluaXRpYWxWaWV3IiwibG9jYWxlIiwiY29udGVudEhlaWdodCIsImhlYWRlclRvb2xiYXIiLCJjZW50ZXIiLCJldmVudERpZE1vdW50IiwiaW5mbyIsInRvb2x0aXAiLCJleHRlbmRlZFByb3BzIiwicGxhY2VtZW50IiwidHJpZ2dlciIsImNvbnRhaW5lciIsInZpZXdEaWRNb3VudCIsImhhbmRsZU1vbnRoTmF2IiwiZmNUb29sYmFyRWwiLCJuZXdEaXZFbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsIm1vbnRoRGF0ZSIsIkRhdGUiLCJnZXRDdXJyZW50RGF0YSIsImN1cnJlbnREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsIm1vbnRoTmFtZVdpdGhZZWFyIiwiZm9ybWF0RGF0ZSIsIm1vbnRoIiwieWVhciIsImN1c3RvbUJ1dHRvbiIsImdvdG9EYXRlIiwiX2xvb3AiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiYnVyZ2VyMiIsIm1vYmlsZU1lbnUiLCJzZXRBdHRyaWJ1dGUiLCJDb2xsYXBzZSIsIm5hdmJhclRvZ2dsZXIiLCJzZWFyY2hGb3JtIiwibGVuZ3RoIiwidG9nZ2xlckluc3RhbmNlIiwidG9nZ2xlIiwic2VhcmNoSW5zdGFuY2UiLCJoaWRlIiwic2V0VGltZW91dCIsImZvY3VzIiwiU3dpcGVyIiwic3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1Blckdyb3VwIiwiYnJlYWtwb2ludHMiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNoZWNrVGFibGVXaWR0aCIsImVsZW1zIiwiY2hpbGRFbGVtIiwib3V0ZXJFbGVtIiwiZWxlbVBhcmVudCIsImVsZW0iLCJjbG9zZXN0Iiwid3JhcHBlciIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJzaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwicGFyZW50RWxlbWVudCIsImVsZW1Cb2R5Iiwic2Nyb2xsZWQiLCJzY3JvbGxMZWZ0IiwiaW5pdFRhYmxlcyIsInRhYmxlIiwib25sb2FkIiwib25yZXNpemUiLCJsYXN0U2Nyb2xsVG9wIiwiYm9keSIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==