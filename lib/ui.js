// lib/ui.js
export function renderGrid(el, items) {
  el.innerHTML = items.map(item => `
    <a class="card" href="/movie.html?id=${encodeURIComponent(item.id)}">
      <div class="thumb-wrap">
        <img loading="lazy" src="${item.thumb}" alt="${escapeHtml(item.title)}" />
        <span class="badge">HOT</span>
      </div>
      <div class="card-body">
        <h3 class="title">${escapeHtml(item.title)}</h3>
      </div>
    </a>
  `).join('');
}

function escapeHtml(str = '') {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
