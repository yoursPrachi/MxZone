// lib/redirect.js
export function runRedirect() {
  const qs = new URLSearchParams(location.search);
  const ad = qs.get('ad');
  const to = qs.get('to');
  const label = qs.get('label') || 'continue';
  const statusEl = document.getElementById('status');
  const manualBtn = document.getElementById('manual');

  const DELAY_MS = 3500; // adjust delay if needed

  if (!ad || !to) {
    statusEl.textContent = 'Invalid link. Please go back and try again.';
    manualBtn.style.display = 'none';
    return;
  }

  // Attempt to open Adstra in a new tab (user gesture already happened)
  try {
    const win = window.open(decodeURIComponent(ad), '_blank', 'noopener,noreferrer');
    if (win) {
      statusEl.textContent = 'Sponsor opened. You will be redirected shortly...';
    } else {
      statusEl.textContent = 'Popup blocked. Use the button below to open the sponsor.';
    }
  } catch {
    statusEl.textContent = 'Unable to open sponsor automatically. Use the button below.';
  }

  // Auto-redirect in current tab after delay
  setTimeout(() => {
    location.replace(decodeURIComponent(to));
  }, DELAY_MS);

  // Fallback manual flow
  manualBtn.onclick = () => {
    window.open(decodeURIComponent(ad), '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      location.replace(decodeURIComponent(to));
    }, 1500);
  };
}
