// Bootstrap (importing BS scripts individually)
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports
import {handleFancybox} from "./components/fancybox";
import {handleMenu} from "./components/menu";
import {handleTables} from "./components/tables";
import {handleCheckScroll} from "./utilities/check-scroll";
import {handleForms} from "./components/forms";
import {handleSwiper} from "./components/swiper";
import {handleCalendar} from "./components/calendar";
import {handleAnimation} from "./components/anime";
import {handleSearch} from "./components/search";
import {handleFullCalendar} from "./components/full-calendar";
import {handleCookieBanner} from "./components/cookie_banner";

const mountedFns = [
  handleFancybox,
  handleMenu,
  handleTables,
  handleCheckScroll,
  handleForms,
  handleSwiper,
  handleCalendar,
  handleAnimation,
  handleSearch,
  handleFullCalendar,
  handleCookieBanner,
]

// Run fn-s
for (const demountFn of mountedFns) {
  typeof demountFn === 'function' && demountFn()
}
