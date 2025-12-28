// lib/data.js
import { getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { moviesCol } from "./firebase.js";

export async function fetchMovies() {
  const snap = await getDocs(moviesCol);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
