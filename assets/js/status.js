// Updates the cloud status placeholder once the DOM is ready.
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    var statusEl = document.querySelector('[data-endpoint]');
    if (statusEl) { statusEl.textContent = 'Cloud status: ready'; }
  });
}
