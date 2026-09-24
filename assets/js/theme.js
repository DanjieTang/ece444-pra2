(function () {
  'use strict';

  var storageKey = 'portfolio-theme';
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var preference = null;

  try {
    preference = window.localStorage.getItem(storageKey);
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }

  if (preference !== 'light' && preference !== 'dark') preference = null;

  function applyTheme() {
    var theme = preference || (systemTheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]').setAttribute(
      'content', theme === 'dark' ? '#151922' : '#008073'
    );

    var toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  // Run before styles load so a saved dark theme does not flash light.
  applyTheme();

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    applyTheme();
    toggle.hidden = false;
    toggle.addEventListener('click', function () {
      preference = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme();
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch (error) {
        // Keep the selected theme for this visit even if it cannot be saved.
      }
    });
  });

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener('change', applyTheme);
  } else {
    systemTheme.addListener(applyTheme);
  }

  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    applyTheme();
  });
})();
