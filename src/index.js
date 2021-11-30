import "./index.css";
const player = document.querySelector(".player");
const video = player.querySelector(".player-video");
const videoPreloader = player.querySelector(".player-video__overlay");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".filled-progress");
const toggle = player.querySelector(".toggle-play");
const skippers = player.querySelectorAll("[data-skip]");
const range = player.querySelector(".player-slider");
const volumeOnOffBtn = player.querySelector(".toggle-volume");

function togglePlay() {
  const playState = video.paused ? "play" : "pause";
  video[playState]();
}
function checkforVideo() {
  var b = setInterval(() => {
    if (video.readyState >= 3) {
      clearInterval(b);
      videoPreloader.classList.toggle("player-video__overlay_hide");
    }
  }, 500);
}
function updatePlayButton() {
  const togglePlayBtn = document.querySelector(".toggle-play");

  if (this.paused) {
    togglePlayBtn.innerHTML = `<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>play</title><path d="M3 2l10 6-10 6z"></path></svg>`;
  } else {
    togglePlayBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16"><title>pause</title><path d="M2 2h5v12H2zm7 0h5v12H9z"></path></svg>`;
  }
}
function updateSoundButton() {
  if (video.muted) {
    volumeOnOffBtn.innerHTML = `<svg  width="16" height="16" fill="currentColor" class=" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
      </svg>`;
  } else {
    volumeOnOffBtn.innerHTML = `<svg width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
      </svg>`;
  }
}

function skip(e) {
  video.currentTime += parseFloat(this.dataset.skip);
  e.target.classList.toggle("btn-skip_active");
  setTimeout(() => e.target.classList.toggle("btn-skip_active"), 1000);
}

function rangeUpdate() {
  video[this.name] = this.value;
}
function setOnOffVolume() {
  video.muted = !video.muted;
}

function progressUpdate() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
  const hours = Math.floor(video.currentTime / 60 / 60);
  const minutes = Math.floor(video.currentTime / 60 - hours * 60);
  const seconds = Math.floor(video.currentTime % 60);
  progressFilled.dataset.progress = `${hours}:${minutes}:${seconds}`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", progressUpdate);
video.addEventListener("volumechange", updateSoundButton);

toggle.addEventListener("click", togglePlay);
skippers.forEach((button) => button.addEventListener("dblclick", skip));
range.addEventListener("change", rangeUpdate);
range.addEventListener("mousemove", rangeUpdate);
volumeOnOffBtn.addEventListener("click", setOnOffVolume);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

checkforVideo();
