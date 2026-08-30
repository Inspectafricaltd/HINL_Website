/* HINL Theme — vanilla JS */
(function () {
  'use strict';

  // ── FAQ accordion ─────────────────────────────────────────────────────────
  function initFAQ() {
    document.querySelectorAll('.hinl-faq-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = this.closest('.hinl-faq-item');
        var isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.hinl-faq-item.open').forEach(function (el) {
          el.classList.remove('open');
        });
        // Toggle clicked
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // ── Booking form AJAX ─────────────────────────────────────────────────────
  function initBookingForm() {
    var form = document.getElementById('hinl-booking-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var statusEl = document.getElementById('hinl-booking-status');
      if (!statusEl) return;

      btn.disabled = true;
      btn.textContent = 'Sending…';

      var data = new FormData(form);
      data.append('action', 'hinl_booking');
      data.append('nonce', HINLConfig.nonce);

      fetch(HINLConfig.ajaxUrl, { method: 'POST', body: data })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            statusEl.className = 'hinl-form-status hinl-form-status--success';
            statusEl.textContent = res.data.message;
            form.reset();
          } else {
            statusEl.className = 'hinl-form-status hinl-form-status--error';
            statusEl.textContent = res.data.message || 'Something went wrong. Please try again.';
          }
        })
        .catch(function () {
          statusEl.className = 'hinl-form-status hinl-form-status--error';
          statusEl.textContent = 'Network error. Please try again.';
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = 'Book My Inspection';
        });
    });
  }

  // ── Mobile navbar toggle ──────────────────────────────────────────────────
  function initMobileNav() {
    var toggle = document.getElementById('hinl-nav-toggle');
    var menu   = document.getElementById('hinl-nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('hinl-nav-menu--open');
      toggle.setAttribute('aria-expanded', open);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('hinl-nav-menu--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Smooth scroll for anchor links ────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = this.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          var offset = 80; // navbar height
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initFAQ();
    initBookingForm();
    initMobileNav();
    initSmoothScroll();
  });

})();
