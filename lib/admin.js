// lib/admin.js
import { addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { moviesCol } from "./firebase.js";

const cloudName = "YOUR_CLOUD_NAME";
const uploadPreset = "YOUR_UNSIGNED_PRESET";

document.getElementById("uploadWidget").onclick = () => {
  cloudinary.openUploadWidget({
    cloudName,
    uploadPreset,
    sources: ["local", "url", "camera"],
    cropping: true,
    multiple: false,
    folder: "movies"
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      document.getElementById("thumbUrl").value = result.info.secure_url;
      alert("Poster uploaded!");
    }
  });
};

document.getElementById("movieForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const movie = {
    title: form.title.value,
    description: form.description.value,
    thumb: form.thumb.value,
    adstraLink: form.adstraLink.value,
    teraboxLink: form.teraboxLink.value,
    createdAt: Date.now()
  };
  await addDoc(moviesCol, movie);
  alert("Movie saved to Firebase!");
  form.reset();
});
