/* nav.js — sticky nav + mobile hamburger + dropdown */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    var backdrop = document.querySelector('.nav-backdrop');
    var body = document.body;

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      body.classList.remove('menu-open');
      // close any open dropdowns on mobile
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        el.classList.remove('open');
      });
    }

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('active', isOpen);
        if (backdrop) backdrop.classList.toggle('active', isOpen);
        body.classList.toggle('menu-open', isOpen);
      });
    }

    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // Mobile dropdown toggling
    document.querySelectorAll('.has-dropdown > button').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          var li = btn.parentElement;
          var wasOpen = li.classList.contains('open');
          // close siblings
          document.querySelectorAll('.has-dropdown.open').forEach(function (sib) {
            if (sib !== li) sib.classList.remove('open');
          });
          li.classList.toggle('open', !wasOpen);
        }
      });
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 992) closeMenu();
      });
    });

    // Close menu on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Reset menu state on resize past breakpoint
    var lastWidth = window.innerWidth;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 992 && lastWidth <= 992) closeMenu();
      lastWidth = window.innerWidth;
    });
  });
})();
