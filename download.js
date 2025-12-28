// download.js
export function runLoaderAndRedirect(targetUrl) {
  const loader = document.getElementById("loader");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const countdownText = document.getElementById("countdownText");
  const circleProgress = document.getElementById("circleProgress");

  loader.classList.remove("hidden");

  let progress = 0;
  let countdown = 3;
  let circleLength = 280;

  // Countdown
  countdownText.textContent = countdown;
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownText.textContent = countdown > 0 ? countdown : "Go!";
    circleProgress.style.strokeDashoffset = circleLength * (countdown / 3);
    if (countdown <= 0) clearInterval(countdownInterval);
  }, 1000);

  // Progress bar
  const progressInterval = setInterval(() => {
    progress += 5;
    progressFill.style.width = progress + "%";
    progressText.textContent = `Preparing your request... ${progress}%`;

    if (progress >= 100) {
      clearInterval(progressInterval);
      loader.classList.add("hidden");
      // Redirect
      window.location.href = targetUrl;
    }
  }, 200);
}
