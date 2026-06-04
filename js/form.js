/* form.js — Formspree async submission with inline status */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form.contact-form').forEach(function (form) {
      var status = form.querySelector('.form-status');
      var btn = form.querySelector('button[type="submit"]');
      var originalBtnText = btn ? btn.textContent : 'SEND MESSAGE';

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (status) { status.className = 'form-status'; status.textContent = ''; }
        if (btn) { btn.disabled = true; btn.textContent = 'SENDING…'; }

        var data = new FormData(form);
        fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        }).then(function (res) {
          if (res.ok) {
            form.reset();
            if (status) {
              status.classList.add('success');
              status.textContent = '✓ Thanks! Your message is on its way. Mike will be in touch shortly.';
            }
          } else {
            res.json().then(function (data) {
              if (status) {
                status.classList.add('error');
                status.textContent = (data && data.errors && data.errors.map(function (e) { return e.message; }).join(', ')) || 'Something went wrong. Please call 973.787.7122.';
              }
            });
          }
        }).catch(function () {
          if (status) {
            status.classList.add('error');
            status.textContent = 'Network error. Please call 973.787.7122.';
          }
        }).finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = originalBtnText; }
        });
      });
    });
  });
})();
