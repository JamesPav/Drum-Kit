//event listener
window.addEventListener("keydown", playSound);
window.addEventListener("click", clickSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);

  if (!audio) return; // return nothing (exit) if there is no key assigned
  box.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".box");
keys.forEach((box) => box.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function clickSound(e) {
  if (
    e.target.classList.contains("box") ||
    e.target.classList.contains("sound") ||
    e.target.tagName == "KBD"
  ) {
    const audio = document.querySelector(
      `audio[data-key="${e.target.getAttribute("data-key")}"]`
    );
    const box = document.querySelector(
      `.box[data-key="${e.target.getAttribute("data-key")}"]`
    );

    if (!audio) return; // return nothing (exit) if there is no key assigned
    box.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
}
