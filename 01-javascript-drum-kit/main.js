window.addEventListener("keydown", (e) => {
  const code = e.code

  /**
   * @type {HTMLAudioElement | null}
   */
  const audio = document.querySelector(`audio[data-key="${code}"]`)

  const key = document.querySelector(`.key[data-key="${code}"]`)
  if (!audio) return
  audio.currentTime = 0 // rewind to the start
  audio.play()
  key.classList.add("active")
})

/**
 * @param {TransitionEvent} e
 */
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return
  /**
   * @type {Element}
   */
  const element = e.target
  element.classList.remove("active")
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => { key.addEventListener("transitionend", removeTransition) })
