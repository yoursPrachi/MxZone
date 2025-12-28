import { transformUrl } from "./utils.js";

export function renderGrid(el, items) {
  el.innerHTML = items.map(item => `
    <a class="card" href="/movie.html?id=${encodeURIComponent(item.id)}">
      <img src="${transformUrl(item.thumb, 'thumb')}" alt="${item.title}" />
      <div class="card-body"><h3>${item.title}</h3></div>
    </a>
  `).join('');
}

// Netflix-style horizontal row
export function renderRow(el, items) {
  el.innerHTML = items.map(item => `
    <a class="card" href="/movie.html?id=${encodeURIComponent(item.id)}">
      <img src="${transformUrl(item.thumb, 'thumb')}" alt="${item.title}" />
    </a>
  `).join('');
}
