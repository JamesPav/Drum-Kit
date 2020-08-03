//event listener
window.addEventListener("keydown", playSound);
window.addEventListener("click", clickSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // return nothing (exit) if there is no key assigned
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function clickSound(e) {
  if (
    e.target.classList.contains("key") ||
    e.target.classList.contains("sound") ||
    e.target.tagName == "KBD"
  ) {
    const audio = document.querySelector(
      `audio[data-key="${e.target.getAttribute("data-key")}"]`
    );
    const key = document.querySelector(
      `.key[data-key="${e.target.getAttribute("data-key")}"]`
    );

    if (!audio) return; // return nothing (exit) if there is no key assigned
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
}
