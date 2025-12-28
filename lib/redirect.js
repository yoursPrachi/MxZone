// lib/redirect.js
export function runRedirect() {
  const qs = new URLSearchParams(location.search);
  const ad = qs.get('ad');
  const to = qs.get('to');
  const statusEl = document.getElementById('status');
  const manualBtn = document.getElementById('manual');

  try {
    window.open(decodeURIComponent(ad), '_blank', 'noopener,noreferrer');
    statusEl.textContent = 'Sponsor opened. Redirecting...';
  } catch {
    statusEl.textContent = 'Popup blocked. Use manual button.';
  }

  setTimeout(() => {
    location.replace(decodeURIComponent(to));
  }, 3500);

  manualBtn.onclick = () => {
    window.open(decodeURIComponent(ad), '_blank', 'noopener,noreferrer');
