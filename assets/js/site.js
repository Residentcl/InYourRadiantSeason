(function () {
  document.addEventListener('click', function (event) {
    const button = event.target.closest('[data-spoiler-toggle]');
    if (!button) return;

    const id = button.getAttribute('aria-controls');
    const panel = document.getElementById(id);
    if (!panel) return;

    const isHidden = panel.hasAttribute('hidden');
    if (isHidden) {
      panel.removeAttribute('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.textContent = button.dataset.hideLabel || 'Hide spoilers';
    } else {
      panel.setAttribute('hidden', '');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = button.dataset.showLabel || 'Show spoilers';
    }
  });
})();
