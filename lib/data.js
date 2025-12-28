import { getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { moviesCol } from "./firebase.js";

export async function fetchMovies() {
  const snap = await getDocs(moviesCol);
  const movies = [];
  snap.forEach(doc => movies.push({ id: doc.id, ...doc.data() }));
  return movies.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}
