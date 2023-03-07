import Collapse from 'bootstrap/js/dist/collapse';
export function handleSearch() {
  const navbarToggler = document.getElementById('navbarPrimary');
  const searchForm = document.querySelectorAll('.toggle-search-form');

  if (!searchForm.length || !navbarToggler) {
    return
  }

  const togglerInstance = new Collapse(navbarToggler, { toggle: false });

  Array.from(searchForm).map(form => {
    let searchInstance = new Collapse(form, { toggle: false });
    // Hide RWD menu when click search, focus on search
    form.addEventListener('show.bs.collapse', function () {
      togglerInstance.hide();
      setTimeout(function () {
        form.querySelector('.search-field').focus()
      }, 0)
    });

    // Hide search on body click
    document.addEventListener('click', (e) => {
      if (!form.contains(e.target)) {
        searchInstance.hide();
      }
    });
  });
}
