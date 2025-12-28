// lib/admin.js
document.getElementById('movieForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const movie = {
    id: slugify(form.title.value),
    title: form.title.value.trim(),
    description: form.description.value.trim(),
    thumb: form.thumb.value.trim(),
    adstraLink: form.adstraLink.value.trim(),
    teraboxLink: form.teraboxLink.value.trim()
  };

  const snippet = `{
  id: '${movie.id}',
  title: '${movie.title}',
  thumb: '${movie.thumb}',
  description: '${movie.description}',
  adstraLink: '${movie.adstraLink}',
  teraboxLink: '${movie.teraboxLink}'
},`;

  document.getElementById('output').textContent = snippet;
  alert('Movie added! Copy the code and paste into lib/data.js');
});

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
