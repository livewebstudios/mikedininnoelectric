/* animations.js — IntersectionObserver scroll reveals */
(function () {
  'use strict';

  window.LWS = window.LWS || {};

  var observer = null;

  function makeObserver() {
    if (!('IntersectionObserver' in window)) return null;
    return new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }

  window.LWS.observe = function (el) {
    if (!el) return;
    // Fallback: ensure visibility if observer not available
    if (!observer) {
      el.classList.add('is-visible');
      return;
    }
    observer.observe(el);
  };

  document.addEventListener('DOMContentLoaded', function () {
    observer = makeObserver();
    var targets = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');
    if (!observer) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    targets.forEach(function (el) { observer.observe(el); });

    // Simple tab handler (about page)
    document.querySelectorAll('.tabs').forEach(function (tabs) {
      var btns = tabs.querySelectorAll('.tab-btn');
      var panels = tabs.querySelectorAll('.tab-panel');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.getAttribute('data-tab');
          btns.forEach(function (b) { b.classList.toggle('active', b === btn); });
          panels.forEach(function (p) {
            p.classList.toggle('active', p.getAttribute('data-panel') === target);
          });
        });
      });
    });
  });
})();
